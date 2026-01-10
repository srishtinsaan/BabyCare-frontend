function Events() {

  const [heading, setHeading] = useState("Our Events");
  const [subHeading, setSubHeading] = useState("Our Upcoming Events");
  const [events, setEvents] = useState([]);
  
   useEffect(() => {
  async function fetchEvents() {
    try {
      const res = await fetch(
        "https://babycare-admin-backend-ulfg.onrender.com/events",
        { cache: "no-store" }
      );
      const data = await res.json();
console.log("Fetched data:", data);

      if (data.success) {
        setHeading(data.data.heading);
        setSubHeading(data.data.subHeading);
        setEvents(data.data.event || []);  // ya data.data
console.log("Events set:", data.data.event);

      }
    } catch (err) {
      console.error("Failed to load programs", err);
    }
  }

  fetchEvents();
}, []);

  return (
    <div  
    className='flex flex-col items-center justify-center bg-[#FFECF2] pb-20'>

      {/* title */}
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} 
      className=' mt-20 flex justify-center text-3xl text-[#F4467B]' >{heading}</h2>
      <h1 className='text-center text-6xl text-[#393D72] mt-5 mb-10' 
      style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }} >{subHeading}</h1>


      {/* boxes */}
      <div className="flex flex-wrap justify-center gap-6 relative">
        {events.map((items, index) => (
          <div
            key={index}
            className="w-80 bg-white border border-[#F4467B] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >

            {/* date */}
            <div className="absolute px-3 bg-blue-500 text-white rounded-md" >
              {items.date}
            </div>

            {/* program image */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={items.imageUrl || "https://themewagon.github.io/BabyCare/img/program-1.jpg"}
                alt=""
                className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* blue strip */}
              <div className="bg-[#4D65F9] text-white gap-5 px-3 py-2 flex justify-between ">
                <h3> {items.time}</h3>
                <h3>{items.location}</h3>
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
