import { useEffect, useState } from "react";


function Team() {
  const [heading, setHeading] = useState("Our Team");
  const [subHeading, setSubHeading] = useState("Meet With Our Expert Teacher");
  const [teams, setteams] = useState([]);
  
   useEffect(() => {
  async function fetchteams() {
    try {
      const res = await fetch(
        "https://babycare-admin-backend-ulfg.onrender.com/teams",
        { cache: "no-store" }
      );
      const data = await res.json();
console.log("Fetched data:", data);

      if (data.success) {
        setHeading(data.data.heading);
        setSubHeading(data.data.subHeading);
        setteams(data.data.team || []);  // ya data.data
console.log("teams set:", data.data.team);

      }
    } catch (err) {
      console.error("Failed to load programs", err);
    }
  }

  fetchteams();
}, []);

  return (
    <div className="flex flex-col items-center py-20">
      {/* title */}
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
        className="text-3xl text-[#F4467B] mb-4">
        {heading}
      </h2>
      <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
        className="text-6xl text-[#393D72] text-center mb-12">
        {subHeading}
      </h1>

      {/* team cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {teams.map((items, index) => (
          <div key={index} className="w-72 bg-white border border-[#F4467B] rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-6">
            
            {/* image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img src={items.imageUrl} alt={items.name} className="w-full h-full object-cover"/>
            </div>

             {/* name */}
            <h1 className="text-[#F4467B] text-xl font-semibold mb-2">{items.name}</h1>

            {/* designation */}
            <p className="text-gray-700 mb-4 text-center">{items.designation}</p>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
