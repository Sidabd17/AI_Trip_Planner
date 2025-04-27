// import React from 'react'

import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import InfoSection from "../components/infoSection";
import Hotels from "../components/hotels";
import PlacesToVisit from "../components/PlacesToVisit";

const ViewTrip = () => {
    const {tripId} = useParams();
    const [trip , setTrip] = useState();

    useEffect(()=>{
        tripId&&getTripData();
    }, [tripId]);

    const getTripData = async () =>{
        const docRef = doc(db, 'AI-Trips' , tripId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            // console.log(docSnap.data()); 
            setTrip(docSnap.data());
        }else{
            toast.error("No such trip found!");
            console.log("No such documnent");     
        }
    }
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <InfoSection trip={trip}/>
      <Hotels trip={trip}/>
      <PlacesToVisit trip={trip}/>
    </div>
  )
}

export default ViewTrip
