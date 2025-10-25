import React from 'react'


function Programs() {

  const content = [
    {title : "English for today",  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus.",
      img : "https://themewagon.github.io/BabyCare/img/program-1.jpg",
      teacherImg : "https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
    },
    {title : "Graphics Arts", desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus.",
      img : "https://themewagon.github.io/BabyCare/img/program-2.jpg",
      teacherImg : "https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
    },
    {title : "General Science",desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus.",
      img : "https://themewagon.github.io/BabyCare/img/program-3.jpg",
            teacherImg : "https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
    },
    
  ]
  
  return (
    <div  
    className='flex flex-col items-center justify-center bg-[#FFECF2]'>

      {/* title */}
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} 
      className=' mt-20 flex justify-center text-3xl text-[#F4467B]' >Our Programs</h2>
      <h1 className='text-center text-6xl text-[#393D72] mt-5 mb-10' 
      style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }} >We Offer An Exclusive <br /> Program For Kids</h1>


      {/* boxes */}
      <div className="flex flex-wrap justify-center gap-6">
        {content.map((items, index) => (
          <div
            key={index}
            className="w-80 bg-white border border-[#F4467B] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            {/* program image */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={items.img}
                alt=""
                className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* text */}
            <div className="p-6">
              <h1 className="text-[#393D72] text-xl font-semibold mb-2">
                {items.title}
              </h1>
              <p className="text-gray-700 mb-4">{items.desc}</p>
              <hr className="mb-4" />

              {/* teacher info */}
              <div className="flex items-center mb-4">
                <div className="rounded-full w-10 h-10 overflow-hidden mr-3">
                  <img src={items.teacherImg} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-700 font-medium">Teacher</span>
              </div>

              {/* pink strip */}
              <div className="bg-[#FF4880] text-white gap-5 px-3 py-2 flex justify-between rounded-md">
                <h3>30 seats</h3>
                <h3>11 lessons</h3>
                <h3>60 hours</h3>
              </div>
            </div>
          </div>
        ))}
      </div>


    <button className="mt-12 bg-[#F4467B] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#ff5e95] transition">
        View All Programs
      </button>
    </div>
  )
}

export default Programs
