import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Navbar() {

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Events", path: "/events" },
    { name: "Pages", path: "/pages", submenu: [
        { name: "Our Blog", path: "/pages/blogs" },
        { name: "Our Team", path: "/pages/pricing" },
        { name: "Testimonial", path: "/pages/faq" },
      ] },
    { name: "Contact", path: "/contact" },
  ];

  const icons = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
    <div className="bg-[#FFECF2] h-35 ">

      {/* Pink div */}
      <div className="h-12 ml-40 w-3/4 bg-[#FF4880] rounded-3xl flex items-center justify-between px-6">

        {/* Address & Email (Left) */}
        <div className="flex items-center space-x-6 text-white">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>123, Jane Street</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-blue-500" />
            <span>Email@email.com</span>
          </div>
        </div>

        {/* Social Icons (Right) */}
        <div className="flex items-center space-x-3">
          {icons.map((items, index) => (
            <button
              key={index}
              onClick={() => handleIconClick(items.url)}
              className="w-8 h-8 bg-white rounded-full text-blue-500 flex items-center justify-center hover:bg-gray-100 transition"
            >
              {items.icon}
            </button>
          ))}
        </div>

      </div>
      
      {/* Bottom div */}
      <div className="flex items-center justify-between px-20 mt-5">

      {/* Logo */}
      <a href="/" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} className="text-5xl font-semibold text-[#FF4880]">Baby<span className="text-blue-500">Care</span></a>

  {/* Links */}
  <div className="flex gap-10">
    {links.map((item) => (
      <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }} key={item.name} className="relative group text-gray-500">
      <Link
        key={item.name}
        to={item.path}
        className="hover:text-pink-500 transition">
        {item.name}
      </Link>


      {/* Dropdown for Pages */}
      
      {item.submenu && (
      <div className="z-10 absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 
      group-hover:opacity-100 invisible group-hover:visible transition-all">
        {item.submenu.map((sublink) => (
              <Link key={sublink.name} to={sublink.path} className="block px-4 py-2 hover:bg-pink-100">
                {sublink.name}
              </Link>
        ))}
      </div>
      )}
    </div>
    ))}
  </div>
</div>


    </div>
    </div>
  );
}

export default Navbar;
