import React from 'react'
import { Link } from 'react-router-dom'
import PlaceCard from './PlaceCard'

const PlacesToVisit = ({trip}) => {
    const Capitalize = (day) =>{
        return day.charAt(0).toUpperCase() + day.slice(1, 3) + " " + day.slice(3);
    }
    return (
        <div className='p-2 mt-15 rounded-lg shadow-xl bg-slate-100'>
          <h1 className='font-bold text-2xl mb-3'>Places to visit</h1>
    
          {Object.entries(trip?.tripData?.travelPlan?.itinerary || {}).map(([day, data], index) => (
                <div className='border-zinc-600 shadow-lg  p-2 mt-4 rounded-lg'  key={index}>
                <h2 className='text-xl font-bold'>{Capitalize(day)}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {data.plan.map((item, idx) => (
                            <div key={idx}>
                            <h2 className='text-sm text-orange-600 mb-2'>{item.bestTimeToVisit}</h2>   
                            <PlaceCard place={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      )
}

export default PlacesToVisit
