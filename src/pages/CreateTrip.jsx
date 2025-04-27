// import React from 'react'

import { useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { AI_PROMPT, SelectBudgetOptions, SelectTravelersList } from "../constants/options";
import {toast} from "react-hot-toast";
import { chatSession } from "../services/AIModel";
import { FcGoogle } from "react-icons/fc";
import DialogBox from "../components/DialogBox";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const CreateTrip = () => {
    const [place , setPlace] = useState();
    const [formData , setFormData] = useState([]);
    const [openDialog , setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleInputChange = (name , value) =>{
        setFormData({...formData , [name]:value})
    }

    const submitHandler = async() => {
      const user = localStorage.getItem('user');
      if(!user){
        setOpenDialog(true);
        return;
      }

      if (!formData.location || !formData.noOfDays || !formData.budget || !formData.travelers) {
          toast.error("All fields are required");
          return;
      }
      if (formData.noOfDays > 10) {
          toast.error("Maximum number of days should not exceed 10");
          return;
      }
      toast.success("Form submitted successfully!");
      console.log(formData);

      setLoading(true);
      // Add API call to send data to server
      const FINAL_PROMPT = AI_PROMPT
      .replace('{location}' , formData?.location.label)
      .replace('{totalDays}' , formData?.noOfDays)
      .replace('{travelers}' , formData?.travelers)
      .replace('{budget}' , formData?.budget)
      .replace('{totalDays}' , formData?.noOfDays)

      // console.log(FINAL_PROMPT);
      
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      // console.log(result?.response?.text());
      saveAiTrip(result?.response?.text());
      setLoading(false);
     
  }

  const saveAiTrip = async(TripData)=>{

    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();
    await setDoc(doc(db , "AI-Trips" ,docId),{
      userSelections: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id:docId
    });
    setLoading(false);
    navigate('/view-trip/' + docId );
  }

  const handleSignIn = useGoogleLogin({
     onSuccess:(codeResp)=>getUserProfile(codeResp),
     onError:(error)=>console.log(error)
  })

  const getUserProfile= async (tokenInfo) =>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers:{
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((response)=>{
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response.data));
      setOpenDialog(false);
      submitHandler();
    })
  }

    // useEffect(()=>{
    //   console.log(formData);
    // },[formData])
    
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 p-5 mx-[250px] mt-10 flex flex-col justify-center'>
      <h2 className='font-bold text-3xl'>Tell us Your Travel Preference 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information , and our trip planner will generate a customized itinerary based on your preferences</p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
            <h2 className='my-3 text-xl font-medium '>What is the destinaton of your choice?</h2>
            <GooglePlacesAutocomplete
               apiKey={import.meta.env.VITE_GOOGLE_MAP_PLACES_API_KEY}
               selectProps={{
                place,
                onChange:(v)=>{setPlace(v); handleInputChange('location' , v)}
               }} 
            />
        </div>
        <div >
            <h2 className='my-3 text-xl font-medium '>For how many days are you planning your trip</h2>
            <input className="border border-gray-400 outline-none rounded-md w-[960px] p-2"
             type="number" 
             placeholder="Enter number of days"
             onChange={(e)=>handleInputChange('noOfDays', e.target.value)}
             />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-3xl">What is your Budget?</h2>
        <p className="font-semibold text-2xl mt-4">The budget is exclusively allocated for activities and dining purposes</p>

        <div className="grid grid-cols-3 gap-5 mt-5">
           {SelectBudgetOptions.map((item,index) =>(
              <div key={index}
              onClick={()=>handleInputChange('budget', item.title)}
               className={`p-4 rounded-lg bg-slate-200 hover:shadow-lg cursor-pointer ${formData?.budget==item.title?'shadow-xl border-2 border-black' : 'border border-gray-300'}`}>
                {/* <img src={item.icon} alt="" /> */}
                <div className="text-4xl ">{item.icon}</div>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
           ))}
        </div>
        
        <h2 className="font-bold text-3xl mt-10">How many are in your travelers list?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
           {SelectTravelersList.map((item,index) =>(
              <div key={index}
              onClick={()=>handleInputChange('travelers', item.people)}
              className={`p-4 rounded-lg bg-slate-200 hover:shadow-lg cursor-pointer ${formData?.travelers==item.people?'shadow-xl border-2 border-black' : 'border border-gray-300'}`}>
                {/* <img src={item.icon} alt="" /> */}
                <div className="text-4xl ">{item.icon}</div>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
           ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button disabled={loading} onClick={submitHandler} className="p-2 px-3 bg-black text-white font-bold rounded-lg ">
          {
            loading? (
              <AiOutlineLoading3Quarters className="w-7 h-7 animate-spin"/>
            ) : (
              "Generate Trip"
            )
          }
          </button>
      </div>

      {/* {openDialog && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black opacity-92 flex items-center justify-center">
          <div className="p-5 bg-white rounded-md w-[300px] shadow-md">
            <h2 className="text-xl font-bold">Please Sign In</h2>
            <p className="mt-3 text-black">To generate a customized trip plan, please sign in first.</p>
            <button onClick={()=>setOpenDialog(false)} className="p-2 px-3 bg-black w-full text-white rounded-sm mt-5 flex gap-3 items-center justify-center">
              <FcGoogle className="w-6 h-6 font-light"/>
              Sign In with Google</button>
          </div>
        </div>
      )} */}

      <div>
        {/* <button onClick={() => setOpenDialog(true)} className="bg-blue-500 text-white p-2 rounded-md">Open Dialog</button> */}

        <DialogBox
          isOpen={openDialog}
          onClose={() => setOpenDialog(false)}
          title="Please Sign In"
          actionText="Sign In with Google"
          onAction={handleSignIn}
          icon={FcGoogle}
        >
          To generate a customized trip plan, please sign in first.
        </DialogBox>
      </div>

    </div>
  )
}

export default CreateTrip
