import React from 'react'

function About() {
  return (
    <div className="w-full h-screen overflow-hidden relative flex items-center">
  {/* Background Image with opacity */}
  <img
    src="https://themewagon.github.io/BabyCare/img/background.jpg"
    alt=""
    className="absolute w-full h-full object-cover opacity-50"
  />

  {/* Right image */}
  <div className=' ml-60 scale-200'>
  <div className="w-70 h-50 relative z-10 overflow-hidden rounded-full">
    <img src="https://themewagon.github.io/BabyCare/img/about.jpg" alt="" className="w-full h-full object-cover"/>
  </div>
  </div>

  {/* Text */}
  <div className="absolute z-20 text-center text-white px-4 ml-180 text-left">
    <h2 className="text-3xl text-[#F4467B] ">About Us</h2>
    <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} 
    className="text-3xl text-[#393D72] ">
      We Learn Smart Way To Build Bright Future For Your Children
    </h1>
    <p style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 300 }} 
    className=" text-[#393D72] ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum a facilis quisquam dolore nemo porro, architecto amet culpa cumque doloremque quo recusandae totam, ab repellat atque. At sed est rem facilis? Hic asperiores omnis, consequuntur perferendis veniam, mollitia recusandae ipsam, tenetur ea quidem est autem iure facilis. Laborum, eligendi.</p>
  </div>

  {/* button */}
  <button 
  className="ml-183 mt-90  absolute bg-[#F4467B] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#ff5e95] transition">
  More Details
  </button>
</div>

  )
}

export default About
