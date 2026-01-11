import { useEffect, useState } from "react";

// https://themewagon.github.io/BabyCare/img/testimonial-2.jpg



function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const [heading, setHeading] = useState("Our Testimonials");
  const [subHeading, setSubHeading] = useState("Parents Say About Us");
  const [testimonials, settestimonials] = useState([]);
  
  useEffect(() => {
if (testimonials.length === 0) return;

const interval = setInterval(() => {
setCurrentIndex(prev =>
(prev + 1) % testimonials.length
);
}, 2000);

return () => clearInterval(interval);
}, [testimonials]);

   useEffect(() => {
  async function fetchtestimonials() {
    try {
      const res = await fetch(
        "https://babycare-admin-backend-ulfg.onrender.com/testimonials",
        { cache: "no-store" }
      );
      const data = await res.json();
console.log("Fetched data:", data);

      if (data.success) {
        setHeading(data.data.heading);
        setSubHeading(data.data.subHeading);
        settestimonials(data.data.testimonial || []);  // ya data.data
console.log("testimonials set:", data.data.testimonial);

      }
    } catch (err) {
      console.error("Failed to load programs", err);
    }
  }

  fetchtestimonials();
}, []);

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-pink-200 py-20">
      {/* title */}
      <h2
        style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
        className="text-3xl text-[#F4467B] mb-4"
      >
        {heading}
      </h2>
      <h1
        style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
        className="text-6xl text-[#393D72] text-center mb-12"
      >
        {subHeading}
      </h1>

      {/* Carousel */}
      <div className="overflow-hidden w-full max-w-7xl">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`
          }}
        >
          {testimonials.concat(testimonials).map((items, index) => (
            <div
              key={index}
              className="w-1/3 px-4 flex-shrink-0 min-h-80"
            >
              <div className="shadow-md min-h-80
               border border-[#F4467B] rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={items.imageUrl|| "https://themewagon.github.io/BabyCare/img/testimonial-2.jpg"}
              
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-[#F4467B] text-xl font-semibold mb-2">{items.name}</h1>
                <p className="text-gray-700 mb-2">{items.designation}</p>
                {/* <p className="text-gray-700 text-sm">{items.testimonial}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex mt-6 gap-3">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-[#F4467B] w-4 h-4" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
