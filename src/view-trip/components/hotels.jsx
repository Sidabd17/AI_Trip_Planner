import React from 'react'
import { Link } from 'react-router-dom'
import HotelCard from './HotelCard'

const Hotels = ({trip}) => {
    // console.log(trip?.tripData?.travelPlan?.hotelOptions)
  return (
    <div className='py-4 mt-5 bg-slate-100 p-2 rounded-xl shadow-xl border-zinc-700'>
      <h1 className='font-bold text-2xl mb-3'>Hotel Recommendation</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {trip?.tripData?.travelPlan?.hotelOptions?.map((hotel, index)=>(
            <HotelCard hotel={hotel} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Hotels

