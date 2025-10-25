import React from 'react'
import { FaGamepad } from "react-icons/fa";        // FontAwesome
import { RiSortAlphabetAsc, RiMentalHealthFill } from "react-icons/ri"; // Remix icons
import { IoIosPeople } from "react-icons/io";     // Ionicons

function Services() {

  const content = [
    {title : "Study & Game", icon : FaGamepad , desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus."},
    {title : "A to Z Programs",icon : RiSortAlphabetAsc,  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus."},
    {title : "Expert Teacher",icon : IoIosPeople,  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus."},
    {title : "Mental Health",icon : RiMentalHealthFill,  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus."}
  ]
  
  return (
    <div  
    className='h-screen flex-col justify-center bg-gradient-to-b from-white to-pink-200 '>

      {/* title */}
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} 
      className=' mt-20 flex justify-center text-3xl text-[#F4467B]' >What We Do</h2>
      <h1 className='text-center text-6xl text-[#393D72] mt-4' 
      style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }} >Thanks To Get Started <br /> With Our School</h1>

      {/* boxes */}
      <div className='flex justify-center '>
{content.map((items, index) => (
  
  <div key={index} className='h-100 w-50 border bg-white border-[#F4467B] p-6 rounded-lg m-4 '>
    <div className='text-[#F4467B] text-8xl mb-2'>{<items.icon />}</div>
    <h1 className='text-[#393D72] text-xl font-semibold mb-2'>{items.title}</h1>
    <p className='text-gray-700 mb-4'>{items.desc}</p>
    <button
      className="bg-[#F4467B] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#ff5e95] transition"
    >
      Read More
    </button>
  </div>
))}
    </div>
    </div>
  )
}

export default Services
