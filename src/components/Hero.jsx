import React from 'react';

function Hero() {
  return (
    <div className="w-full h-screen overflow-hidden relative">


      {/* Background Image */}
      <img
        src="https://themewagon.github.io/BabyCare/img/hero-img.jpg"
        className="w-full h-full object-cover opacity-90"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-1/3 left-24 text-left space-y-6">
        
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          className="text-[#F4467B] text-3xl">
          We Care Your Baby
        </p>

        <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          className="text-white text-6xl leading-tight max-w-2xl">
          The Best Play Area For Your Kids
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <button className="bg-[#F4467B] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#ff5e95] transition">
            Get Started
          </button>
          <button className="bg-white text-[#F4467B] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
