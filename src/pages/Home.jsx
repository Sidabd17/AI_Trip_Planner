// import React from 'react'

import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col items-center mx-56 ">
      <h1 className="font-extrabold text-[48px] text-center mt-16">
        <span className="text-[#f56551]"> Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your <br /> Fingertrips
      </h1>
      <p className="font-semibold mt-5">Your Personal trip planner and travel curator , creating custom itineraries tailored to your interests and budget </p>
      <button className="bg-black p-3 rounded-lg text-white my-8"><Link to='create-trip'>Get started, it&apos;s free</Link></button>
    </div>
  )
}

export default Home
