import { useEffect, useState } from "react";

const clients = [
  {
    name: "Linda Carlson",
    img: "https://themewagon.github.io/BabyCare/img/testimonial-2.jpg",
    profession: "Profession",
    rating: 4.8,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Doe",
    img: "https://themewagon.github.io/BabyCare/img/testimonial-2.jpg",
    profession: "Profession",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus metus nec felis fermentum, a tincidunt elit volutpat."
  },
  {
    name: "Sara Smith",
    img: "https://themewagon.github.io/BabyCare/img/testimonial-2.jpg",
    profession: "Profession",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id magna vitae erat consectetur ullamcorper at ut neque."
  },
  {
    name: "Mike Brown",
    img: "https://themewagon.github.io/BabyCare/img/testimonial-2.jpg",
    profession: "Profession",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis a justo bibendum efficitur at eget purus."
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // number of cards visible at once

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-pink-200 py-20">
      {/* title */}
      <h2
        style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
        className="text-3xl text-[#F4467B] mb-4"
      >
        Our Testimonials
      </h2>
      <h1
        style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
        className="text-6xl text-[#393D72] text-center mb-12"
      >
        Parents Say About Us
      </h1>

      {/* Carousel */}
      <div className="overflow-hidden w-full max-w-7xl">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="w-1/3 px-4 flex-shrink-0 min-h-80"
            >
              <div className="shadow-md min-h-80
               border border-[#F4467B] rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-[#F4467B] text-xl font-semibold mb-2">{client.name}</h1>
                <p className="text-gray-700 mb-2">{client.profession}</p>
                <p className="text-gray-700 text-sm">{client.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex mt-6 gap-3">
        {clients.map((_, index) => (
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
