import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-14 text-black py-12 px-6">
      <div className=" w-11/12 mx-auto flex flex-wrap justify-between">
        {/* Company Info */}
        <div className="w-full md:w-1/4 mb-8 pr-4">
          <h3 className="text-xl font-bold mb-4 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-green-500">
            RenTechify
          </h3>
          <p className="text-black mb-5">
            Your trusted source for the latest gadgets and technology solutions.
          </p>

          <div className="">
            <ul className="flex  space-x-2 mt-4">
              <Link className="">
                <FaFacebook className="font-2xl text-indigo-500"></FaFacebook>
              </Link>
              <Link>
                <FaTwitter className="font-2xl text-blue-700"></FaTwitter>
              </Link>
              <Link>
                <FaInstagram className="font-2xl text-purple-500"></FaInstagram>
              </Link>
              <Link>
                <FaYoutube className="font-3xl text-red-700"></FaYoutube>
              </Link>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/5 mb-8  text-black">
          <h3 className="text-xl font-bold mb-4 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-green-500">
            Quick Links
          </h3>
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "About Us", path: "/about-us" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.path}
                  className="text-black hover:text-green-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="w-full md:w-1/5 mb-8">
          <h3 className="text-xl font-bold mb-4 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-green-500">
            Categories
          </h3>
          <ul>
            {[
              { name: "Smartphones", path: "/smartphones" },
              { name: "Laptops", path: "/laptops" },
              { name: "Wearables", path: "/wearables" },
              { name: "Accessories", path: "/accessories" },
              { name: "Smart Home", path: "/smart-home" },
            ].map((category) => (
              <li key={category.name} className="mb-2">
                <a
                  href={category.path}
                  className="text-black hover:text-green-500 transition-colors duration-300"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*  */}

        {/* Contact Info */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-xl font-bold mb-4 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-green-500">
            Contact Info
          </h3>
          <address className="not-italic">
            <p className="flex items-center text-black mb-2">
              <span className="text-green-500 mr-2">
                <i className="fa fa-map-marker"></i>
              </span>
              123 Jamuna Future Park
            </p>
            <p className="flex items-center text-black mb-2">
              <span className="text-green-500 mr-2">
                <i className="fa fa-phone"></i>
              </span>
              +1 (555) 123-4567
            </p>
            <p className="flex items-center text-gray-300 mb-2">
              <span className="text-green-500 mr-2">
                <i className="fa fa-envelope"></i>
              </span>
              <a
                href="mailto:info@gagete.com"
                className="hover:text-green-500 text-black transition-colors duration-300"
              >
                Dhaka Bangladesh
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-11/12 divider mx-auto pt-6 border-gray-800 text-center">
        <p className="text-black mb-4">
          &copy; {new Date().getFullYear()}
          <span className="italic  text-xl font-bold"> Code Geeks </span> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
