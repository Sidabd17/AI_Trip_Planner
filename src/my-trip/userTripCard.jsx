import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../services/GlobalApi';
import { Link } from 'react-router-dom';

const UserTripCard = ({trip}) => {
    const [photoUrl , setPhotoUrl] = useState();
    
      useEffect(()=>{
        trip&&GetPlacePhoto();
      },[trip])
      
      const GetPlacePhoto = async() =>{
         const data = {
          textQuery:trip?.userSelections?.location?.label
         }
         
         const result = await GetPlaceDetails(data).then(resp=>{
    
          const PhotoUrl=PHOTO_REF_URL.replace('{NAME}' ,resp?.data?.places[0]?.photos[3]?.name);
          
          setPhotoUrl(PhotoUrl);
         })
      }
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-104 transition-all'>
      <img src={photoUrl} className='h-[180px] w-[250px] rounded-lg object-cover' />
      <div className='mt-2'>
        <h2 className='font-bold'>{trip?.userSelections?.location?.label}</h2>
        <h2 className='text-sm text-gray-800'>{trip?.userSelections?.noOfDays} days trip with {trip?.userSelections?.budget} budget</h2>
      </div>
    </div>
    </Link>
  )
}

export default UserTripCard
