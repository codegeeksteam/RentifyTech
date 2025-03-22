import { useEffect, useState, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../assets/download (2).jpeg";
import { CgProfile } from "react-icons/cg";
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
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode(true);
      document.body.classList.add("light");
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

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = (
    <>
      <NavLink className="font-semibold uppercase cta" to={"/"}>
        <span className="hover-underline-animation">Home</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/shop"}>
        <span className="hover-underline-animation">Shop</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/all-gadgets"}>
        <span className="hover-underline-animation">All Gadgets</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/about-us"}>
        <span className="hover-underline-animation">About</span>
      </NavLink>
      <NavLink className="font-semibold uppercase cta" to={"/contact-us"}>
        <span className="hover-underline-animation">Contact</span>
      </NavLink>
    </>
  );

  return (
    <div className="w-full top-0 sticky bg-black/50 backdrop-blur text-white z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <i className="fa-solid fa-bars text-xl dark:text-gray-400"></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-bold dark:text-gray-200">
            <span className="text-white">Ren</span>
            <span className="text-white">Techify</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          <button onClick={toggleDarkMode}>
            <i
              className={
                darkMode
                  ? "fa-solid fa-moon text-white text-xl"
                  : "fa-regular fa-sun text-slate-700 text-xl"
              }
            ></i>
          </button>

          <button className="btn btn-md btn-circle hidden md:block">
            <Link to={"/cart"}>
              <FiShoppingCart className="text-xl mx-auto" />
            </Link>
          </button>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!isDropdownOpen)}>
                <img
                  className="w-10 h-10 border rounded-full object-cover"
                  src={user.photoURL}
                  alt="Profile"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 w-72 bg-white shadow-xl rounded-lg text-gray-900 z-50">
                  <div className="rounded-t-lg h-32 overflow-hidden">
                    <img
                      className="object-cover w-full"
                      src={img}
                      alt="Background"
                    />
                  </div>
                  <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                      className="object-cover h-32"
                      src={user.photoURL}
                      alt="User"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h2 className="font-semibold md:text-2xl text-sm">
                      Name: {user.displayName}
                    </h2>
                    <p className="text-gray-500 md:text-[15px] text-sm">
                      <span className="font-bold">Email:</span> {user.email}
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="p-2">
                    {isAdmin && (<Link
                      to="/dashboard/allUsers"
                      className="w-full rounded-full bg-gray-900 text-white px-6 py-2 block text-center"
                    >
                      Dashboard
                    </Link>)}
                    {isAgent && (<Link
                      to="/dashboard/myAll"
                      className="w-full rounded-full bg-gray-900 text-white px-6 py-2 block text-center"
                    >
                      Dashboard
                    </Link>)}
                    {isUser && (<Link
                      to="/dashboard/myGadget"
                      className="w-full rounded-full bg-gray-900 text-white px-6 py-2 block text-center"
                    >
                      Dashboard
                    </Link>)}
                    <button
                      onClick={handleSignOut}
                      className="w-full mt-2 rounded-full bg-gray-900 text-white px-6 py-2"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signIn" className="btn">
              <CgProfile size={15} />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
