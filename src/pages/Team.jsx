import React from "react";

function Team() {
  const content = [
    { title: "Linda Carlson", img: "https://themewagon.github.io/BabyCare/img/team-1.jpg", desc: "English Teacher" },
    { title: "John Doe", img: "https://themewagon.github.io/BabyCare/img/team-2.jpg", desc: "Math Teacher" },
    { title: "Sara Smith", img: "https://themewagon.github.io/BabyCare/img/team-3.jpg", desc: "Science Teacher" },
    { title: "Mike Brown", img: "https://themewagon.github.io/BabyCare/img/team-4.jpg", desc: "Art Teacher" }
  ];

  return (
    <div className="flex flex-col items-center py-20">
      {/* title */}
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
        className="text-3xl text-[#F4467B] mb-4">
        Our Team
      </h2>
      <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
        className="text-6xl text-[#393D72] text-center mb-12">
        Meet With Our <br /> Expert Teacher
      </h1>

      {/* team cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {content.map((items, index) => (
          <div key={index} className="w-72 bg-white border border-[#F4467B] rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-6">
            
            {/* image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img src={items.img} alt={items.title} className="w-full h-full object-cover"/>
            </div>

             {/* name */}
            <h1 className="text-[#F4467B] text-xl font-semibold mb-2">{items.title}</h1>

            {/* description */}
            <p className="text-gray-700 mb-4 text-center">{items.desc}</p>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
