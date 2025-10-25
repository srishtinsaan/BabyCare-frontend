import { FaMapMarkerAlt, FaPhoneAlt,  FaClock } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-screen overflow-hidden relative flex items-center">
      {/* Background Image with opacity */}
      <img
        src="https://themewagon.github.io/BabyCare/img/background.jpg"
        alt=""
        className="absolute w-full h-full object-cover opacity-20"
      />

      {/* Boxes */}
      <div className="absolute z-20 flex justify-between items-start px-20 py-10 text-white w-full max-w-[1400px] mx-auto">
        
        {/* Box 1 - Logo & Newsletter */}
        <div className="w-80 text-left p-6 rounded-lg">
          {/* Logo */}
          <a
            href="/"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
            className="text-4xl font-semibold text-[#FF4880]"
          >
            Baby<span className="text-blue-500">Care</span>
          </a>

          {/* Description */}
          <p className="mt-3 text-gray-700 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis magni
            laudantium eius dolores in rerum earum nesciunt ex sunt.
          </p>

          {/* Newsletter box */}
          <div className="border border-[#F4467B] bg-[#FFECF2] rounded-xl p-4 mt-5">
            <h1 className="text-[#393D72] font-semibold mb-3">Newsletter</h1>

            <div className="flex bg-white rounded-lg overflow-hidden border border-[#F4467B]">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 w-10 text-black outline-none"
              />
              <button
                className="bg-[#F4467B]  text-white font-semibold px-5 py-2 hover:bg-[#ff5e95] transition-all "
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-50 h-100 rounded-lg border border-[#F4467B] text-gray-700 p-5 ">
            <h2>Monday: 8am to 5pm
<br /><br />
Tuesday: 8am to 5pm
<br /><br />
Wednes: 8am to 5pm
<br /><br />
Thursday: 8am to 5pm
<br /><br />
Friday: 8am to 5pm
<br /><br />
Saturday: 8am to 5pm
<br /><br />
Sunday: Closed</h2>
        </div>

        {/* Box 3 */}
        <div className="w-40 h-80 flex-col space-y-4">
            <h1 className='text-2xl text-[#F4467B] font-semibold mb-7'>LOCATION</h1>
            <div className="flex items-center text-gray-700 gap-2">
                <FaMapMarkerAlt className="text-[#FF4880]" />
                <span>104 North Tower, New York, USA</span>
            </div>

            <div className="flex items-center text-gray-700 gap-2">
                <FaPhoneAlt className="text-[#FF4880]" />
                <span>(+012) 3456 7890 123</span>
            </div>


            <div className="flex items-center text-gray-700 gap-2">
                <FaClock className="text-[#FF4880]" />
                <span>24/7 Hours Service</span>
            </div>

        
        </div>

        {/* Box 4 */}
        {/* Box 4 - Gallery */}
<div className="w-70 h-auto">
  <h1 className="text-2xl text-[#F4467B] font-semibold mb-5">OUR GALLERY</h1>

  <div className="grid grid-cols-3 gap-x-0 gap-y-3">
    {[
      "https://themewagon.github.io/BabyCare/img/event-1.jpg",
      "https://themewagon.github.io/BabyCare/img/program-3.jpg",
      "https://themewagon.github.io/BabyCare/img/event-2.jpg",
      "https://themewagon.github.io/BabyCare/img/blog-1.jpg",
      "https://themewagon.github.io/BabyCare/img/blog-3.jpg",
      "https://themewagon.github.io/BabyCare/img/blog-2.jpg"

    ].map((img, index) => (
      <div
        key={index}
        className="w-15 h-15 rounded-full overflow-hidden cursor-pointer relative group"
      >
        <img
          src={img}
          alt={`gallery-${index}`}
          className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
        />
        {/* Circle border shrink effect */}
        <div className="absolute inset-0 border-1 border-[#F4467B] rounded-full transition duration-500 group-hover:border-2"></div>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 w-full h-15 bg-[#393D72] flex items-center justify-center">
  <p className="text-white text-sm">
    &copy; 2025 BabyCare. All Rights Reserved.
  </p>
</div>
    </div>
  )
}

export default Footer
