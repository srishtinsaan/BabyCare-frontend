function Events() {

  const content = [
    {title : "Music and Drawing Workshop",  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus.",
      img : "https://themewagon.github.io/BabyCare/img/program-1.jpg",
      teacherImg : "https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
    },
    {title : "We Need Study", desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus.",
      img : "https://themewagon.github.io/BabyCare/img/program-2.jpg",
      teacherImg : "https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
    },
    {title : "Child Health Consciousness",desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi eligendi accusamus.",
      img : "https://themewagon.github.io/BabyCare/img/program-3.jpg",
            teacherImg : "https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
    },
    
  ]
  
  return (
    <div  
    className='flex flex-col items-center justify-center bg-[#FFECF2] pb-20'>

      {/* title */}
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} 
      className=' mt-20 flex justify-center text-3xl text-[#F4467B]' >Our Events</h2>
      <h1 className='text-center text-6xl text-[#393D72] mt-5 mb-10' 
      style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }} >Our Upcoming Events</h1>


      {/* boxes */}
      <div className="flex flex-wrap justify-center gap-6 relative">
        {content.map((items, index) => (
          <div
            key={index}
            className="w-80 bg-white border border-[#F4467B] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >

            {/* date */}
            <div className="absolute px-3 bg-blue-500 text-white rounded-md" >
              29 Nov
            </div>

            {/* program image */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={items.img}
                alt=""
                className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* blue strip */}
              <div className="bg-[#4D65F9] text-white gap-5 px-3 py-2 flex justify-between ">
                <h3> 10:00am - 12:00pm</h3>
                <h3>New York</h3>
              </div>

            {/* text */}
            <div className="p-6">
              <h1 className="text-[#393D72] text-xl font-semibold mb-2">
                {items.title}
              </h1>
              <p className="text-gray-700 mb-4">{items.desc}</p>
            </div>
          </div>
        ))}
      </div>


    
    </div>
  )
}

export default Events
