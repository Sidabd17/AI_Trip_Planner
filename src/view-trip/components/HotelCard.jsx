import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../services/GlobalApi';

const HotelCard = ({hotel}) => {
    
     const [photoUrl , setPhotoUrl] = useState();
    
      useEffect(()=>{
        hotel&&GetPlacePhoto();
      },[hotel])
      
      const GetPlacePhoto = async() =>{
         const data = {
          textQuery:hotel.hotelName
         }
         
         const result = await GetPlaceDetails(data).then(resp=>{
      
          const PhotoUrl=PHOTO_REF_URL.replace('{NAME}' ,resp?.data?.places[0]?.photos[3]?.name);
          setPhotoUrl(PhotoUrl);
         })
      }

    return (
        <Link  to={'https://www.google.com/maps/search/?api=1&query=' + hotel.hotelName + "," + hotel.hotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer bg-slate-300 p-2 rounded-lg'>
                <img className='rounded-xl w-full h-[200px] object-cover' src={photoUrl} />
                <div className='my-2 flex flex-col gap-3'>
                    <h2 className='font-medium'>{hotel.hotelName}</h2>
                    <h2 className='text-xs font-medium text-gray-700'>📌 {hotel.hotelAddress}</h2>
                    <h2 className='text-xs font-medium text-gray-700'>💰 {hotel.price.averageNightly}  {hotel.price.currency} Per Night </h2>
                    <h2 className='text-xs font-medium text-gray-700'>⭐ {hotel.rating} ratings</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
