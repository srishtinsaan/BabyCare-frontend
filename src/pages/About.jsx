import { useState, useEffect } from "react";

function About() {
  // States for dynamic content
  const [heading, setHeading] = useState("About Us");
  const [subHeading, setSubHeading] = useState(
    "We Learn Smart Way To Build Bright Future For Your Children"
  );
  const [paragraph, setParagraph] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum a facilis quisquam dolore nemo porro, architecto amet culpa cumque doloremque quo recusandae totam, ab repellat atque..."
  );
  const [rightImage, setRightImage] = useState(
    "https://themewagon.github.io/BabyCare/img/about.jpg"
  ); // default
  const [bgImage, setBgImage] = useState(
    "https://themewagon.github.io/BabyCare/img/background.jpg"
  ); // default

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const response = await fetch(
          "https://babycare-admin-backend-ulfg.onrender.com/about"
        );
        const json = await response.json();

        if (json.success && json.data) {
          const data = json.data;
          setHeading(data.heading || heading);
          setSubHeading(data.subHeading || subHeading);
          setParagraph(data.paragraph || paragraph);
          setRightImage(data.rightImageUrl || rightImage);
          setBgImage(data.bgImageUrl || bgImage);
        }
      } catch (error) {
        console.log("Error fetching About data:", error);
      }
    }

    fetchAboutData();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative flex items-center">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute w-full h-full object-cover opacity-50"
      />

      {/* Right Image */}
      <div className="ml-60 scale-200">
        <div className="w-70 h-50 relative z-10 overflow-hidden rounded-full">
          <img
            src={rightImage}
            alt="About Right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="absolute z-20 text-center text-white px-4 ml-180 text-left">
        <h2 className="text-3xl text-[#F4467B]">{heading}</h2>
        <h1
          style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
          className="text-3xl text-[#393D72]"
        >
          {subHeading}
        </h1>
        <p
          style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 300 }}
          className="text-[#393D72]"
        >
          {paragraph}
        </p>
      </div>

      {/* Button */}
      <button className="ml-183 mt-90 absolute bg-[#F4467B] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#ff5e95] transition">
        More Details
      </button>
    </div>
  );
}

export default About;
