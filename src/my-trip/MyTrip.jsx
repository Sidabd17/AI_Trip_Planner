import { collection,  getDocs,  query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../services/firebase';
import UserTripCard from './userTripCard';
import SkeletonCard from '../components/SkeletonCard';

const MyTrip = () => {
    const navigate = useNavigate();
    const [trips ,setTrips] = useState([]);
    useEffect(()=>{
        GetUserTrips();
    },[])

    const GetUserTrips = async() =>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user){
           navigate('/');
           return;
        }

        const q = query(collection(db , 'AI-Trips'), where('userEmail','==' ,user?.email));
        const querySnapshot = await getDocs(q);
        setTrips([]);

        const tripsData = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data()); 
            tripsData.push(doc.data());
        })

        setTrips(tripsData);
    }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-25 p-5 mx-[250px] mt-10 '>
      <h1 className='font-bold text-3xl'>My Trips</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-1 mt-5'>
        {trips.length>0?trips.map((trip, index)=>(
            <UserTripCard key={index} trip={trip}/>
        )):[1,2,3,4,5,6].map((item,index)=>(
            <SkeletonCard key={index}/>
        ))
        }
      </div>
    </div>
  )
}

export default MyTrip
