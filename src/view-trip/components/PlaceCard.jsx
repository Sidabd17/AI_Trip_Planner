import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../services/GlobalApi';

const PlaceCard = ({place}) => {
  
  const [photoUrl , setPhotoUrl] = useState();
      
        useEffect(()=>{
          place&&GetPlacePhoto();
        },[place])
        
        const GetPlacePhoto = async() =>{
           const data = {
            textQuery:place.placeName
           }
           
           const result = await GetPlaceDetails(data).then(resp=>{
          
            const PhotoUrl=PHOTO_REF_URL.replace('{NAME}' ,resp?.data?.places[0]?.photos[3]?.name);
            // console.log(PhotoUrl);
            setPhotoUrl(PhotoUrl);
           })
        }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
        <div className='p-3 h-[170px] border-1 border-gray-300 bg-slate-300 rounded-lg flex gap-5 hover:scale-103 hover:shadow-md hover:border-gray-400 transition-all'>
            <div className='flex justify-center w-[180px] '>
                <img className='w-full rounded-lg object-cover' src={photoUrl} />
            </div>
            <div className='flex flex-col justify-between gap-1'>
                <h1>📍<span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text drop-shadow-xl">{place?.placeName}</span></h1>
                <h2 className='text-sm font-medium text-gray-700'>
                {place?.placeDetails}
                  </h2>
                <h2 className='text-sm font-medium text-gray-700'>🕘 Time to spend :- {place?.timeToSpend}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PlaceCard
