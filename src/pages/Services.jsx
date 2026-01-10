import React, {useState, useEffect} from 'react'

function Services() {

  const [heading, setHeading] = useState("What We Do");
  const [subHeading, setSubHeading] = useState("Thanks To Get Started With Our School");
  const [services, setservices] = useState([]);
  
   useEffect(() => {
  async function fetchservices() {
    try {
      const res = await fetch(
        "https://babycare-admin-backend-ulfg.onrender.com/services",
        { cache: "no-store" }
      );
      const data = await res.json();
console.log("Fetched data:", data);

      if (data.success) {
        setHeading(data.data.heading);
        setSubHeading(data.data.subHeading);
        setservices(data.data.service || []);  // ya data.data
console.log("services set:", data.data.service);

      }
    } catch (err) {
      console.error("Failed to load programs", err);
    }
  }

  fetchservices();
}, []);
  
  return (
    <div  
    className='h-screen flex-col justify-center bg-gradient-to-b from-white to-pink-200 '>

      {/* title */}
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} 
      className=' mt-20 flex justify-center text-3xl text-[#F4467B]' >{heading}</h2>
      <h1 className='text-center text-6xl text-[#393D72] mt-4' 
      style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }} >{subHeading}</h1>

      {/* boxes */}
      <div className='flex justify-center '>
{services.map((items, index) => (
  
  <div key={index} className='mt-9 w-50 border bg-white border-[#F4467B] rounded-lg m-4 overflow-hidden rounded-t-lg '>
    <img
      src={items.imageUrl}
      className="w-full h-30 object-cover transform hover:scale-110 transition duration-500"
    />
    <h1 className='text-[#393D72] text-xl font-semibold pt-5 px-5 py-5 whitespace-pre-wrap break-words '>{items.title}</h1>
    <p className='text-gray-700 mb-4 pl-6 pr-6 text-gray-700 mb-4 whitespace-pre-wrap break-words'>{items.description}</p>
    <button
      className="m-4 bg-[#F4467B] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#ff5e95] transition"
    >Read More
    </button>
  </div>  
))}
    </div>
    </div>
  )
}

export default Services
