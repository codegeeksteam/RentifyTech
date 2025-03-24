import { useEffect, useState, useRef } from "react";
import { FiShoppingCart, FiSun, FiMoon, FiHome, FiShoppingBag, FiGrid, FiInfo, FiPhone } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import img from "../assets/download (2).jpeg";
import { HiMenu, HiX } from "react-icons/hi"; 
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../Hooks/useAdmin";
import useAgent from "../Hooks/useAgent";
import useUser from "../Hooks/useUser";

export default function Navbar() {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();
  const [isUser] = useUser();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "User logged out successfully!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const navLinks = (
    <>
      <NavLink className="font-semibold uppercase cta" to={"/"}>
        <span className="hover-underline-animation flex gap-1 items-center"><FiHome /> Home</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/shop"}>
        <span className="hover-underline-animation flex gap-1 items-center"><FiShoppingBag /> Shop</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/all-gadgets"}>
        <span className="hover-underline-animation flex gap-1 items-center"><FiGrid /> All Gadgets</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/about-us"}>
        <span className="hover-underline-animation flex gap-1 items-center"><FiInfo /> About</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/contact-us"}>
        <span className="hover-underline-animation flex gap-1 items-center"><FiPhone /> Contact</span>
      </NavLink>
    </>
  );

  return (
    <div className="w-full top-0 sticky bg-black/50 backdrop-blur text-white z-50">
      <div className="navbar container mx-auto flex justify-between items-center">
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Logo */}
        <Link to={"/"} className="text-3xl font-bold">
          <span className="text-white">Ren</span>
          <span className="text-white">Techify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">{navLinks}</div>

        {/* Dark Mode Toggle & Profile */}
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? <FiMoon size={22} /> : <FiSun size={22} />}
          </button>

          <Link to={"/cart"} className="hidden md:block">
            <FiShoppingCart size={22} />
          </Link>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!isDropdownOpen)}>
                <img className="w-10 h-10 border rounded-full object-cover" src={user.photoURL} alt="Profile" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-white shadow-xl rounded-lg text-gray-900 z-50 p-4">
                  <div className="rounded-t-lg h-28 overflow-hidden">
                    <img
                      className="object-cover w-full"
                      src={img}
                      alt="Background"
                    />
                  </div>
                  <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                      className="object-cover h-32"
                      src={user.photoURL}
                      alt="User"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="font-semibold">{user.displayName}</h2>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex flex-col gap-2">
                    {isAdmin && <Link to="/dashboard/allUsers" className="btn btn-sm">Dashboard</Link>}
                    {isAgent && <Link to="/dashboard/myAll" className="btn btn-sm">Dashboard</Link>}
                    {isUser && <Link to="/dashboard/myGadget" className="btn btn-sm">Dashboard</Link>}
                    <button onClick={handleSignOut} className="btn btn-sm bg-red-500 text-white">Log Out</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signIn" className="btn btn-sm">
              <CgProfile size={20} />
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[65px] left-0 w-full bg-gray-900 text-white flex flex-col p-4 space-y-3">
          {navLinks}
        </div>
      )}
    </div>
  );
}
