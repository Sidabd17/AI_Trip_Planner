import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../services/GlobalApi'
// import SkeletonCard from '../../components/SkeletonCard';

const InfoSection = ({trip}) => {
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
      // console.log(PhotoUrl);
      setPhotoUrl(PhotoUrl);
     })
  }
  return (
    <div className='flex flex-col gap-4'>
        {trip?<img className='h-[400px] w-[1000px] object-cover rounded-lg'
        src={photoUrl} />
        :<div className="animate-pulse w-[1000px] h-[400px] bg-gray-300 rounded-xl"></div>}
      <h1 className='font-bold text-2xl'>{trip?.tripData?.travelPlan?.location}</h1>
      <div className='flex gap-5'>
          <h2 className='p-1 px-2 font-bold bg-gray-300 rounded-full text-gray-600'>📅 {trip?.userSelections?.noOfDays} Days </h2>
          <h2 className='p-1 px-2 font-bold bg-gray-300 rounded-full text-gray-600 '>💵 {trip?.userSelections?.budget} budget </h2>
          <h2 className='p-1 px-2 font-bold bg-gray-300 rounded-full text-gray-600'>👨‍👩‍👧‍👦 No of travelers: {trip?.userSelections?.travelers} people</h2>
      </div>
    </div>
  )
}

export default InfoSection
