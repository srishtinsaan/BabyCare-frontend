
function Hero() {

  const [heading, setHeading] = useState("About Us");
  const [subHeading, setSubHeading] = useState(
    "We Learn Smart Way To Build Bright Future For Your Children"
  );
  const [bgImage, setBgImage] = useState(
    "https://themewagon.github.io/BabyCare/img/hero-img.jpg"
  ); // default


   useEffect(() => {
    async function fetchHomeData() {
      try {
        const response = await fetch(
          "https://babycare-admin-backend-ulfg.onrender.com/home", {cache: "no-store"}
        )
        const json = await response.json();

        if (json.success && json.data) {
          const data = json.data;
          setHeading(data.heading || heading);
          setSubHeading(data.subHeading || subHeading);
          setBgImage(data.bgImageUrl || bgImage);
        }
      } catch (error) {
        console.log("Error fetching About data:", error);
      }
    }

    fetchHomeData();
  }, []);


  return (
    <div className="w-full h-screen overflow-hidden relative">


      {/* Background Image */}
      <img
        src={bgImage}
        className="w-full h-full object-cover opacity-90"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-1/3 left-24 text-left space-y-6">
        
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          className="text-[#F4467B] text-3xl">
          {heading}
        </p>

        <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          className="text-white text-6xl leading-tight max-w-2xl">
          {subHeading}
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
