// Desc: Navbar component for the application
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../assets/download (2).jpeg";
import { CgProfile } from "react-icons/cg";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

export default function Navbar() {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth()
  const handleSignOut = () => {
    // similar log out function
    signOutUser()
        .then(() => {
          Swal.fire({
            title: "success!",
            text: "User Log out successfully!",
            icon: "success",
          });
          navigate('/')
        })
        .catch((error) => {
          Swal.fire({
            title: "ERROR!",
            text: `${error.message}`,
            icon: "error",
          });
        });
  };

  // const { setDarkMode, darkMode } = useData(); //this state value false?
  const [darkMode, setDarkMode] = useState(false);

  const links = (
    <>
      <div>
        <NavLink className=" font-semibold uppercase cta" to={"/"}>
          <span className="hover-underline-animation">Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink className="font-semibold uppercase cta" to={"/shop"}>
        <span className="hover-underline-animation">Shop</span>
        </NavLink>
      </div>
      <div>
        <NavLink className="font-semibold uppercase cta" to={"/all-gadgets"}>
        <span className="hover-underline-animation">All Gadgets</span>
        </NavLink>
      </div>
      <div>
        <NavLink className="font-semibold uppercase cta" to={"/about-us"}>
        <span className="hover-underline-animation">About</span>
        </NavLink>
      </div>



      <div>
        {user && (
          <NavLink
            className="hover:bg-transparent cta uppercase dark:text-gray-300 font-semibold"
            to={"/liked"}
          >
         <span className="hover-underline-animation">Liked Gadgets</span>
          </NavLink>
        )}
      </div>
      <div>
        {user && (
          <NavLink
            className="hover:bg-transparent uppercase dark:text-gray-300 font-semibold cta"
            to={"/my-gadgets"}
          >
          <span className="hover-underline-animation">My Gadgets</span>
          </NavLink>
        )}
      </div>
    </>
  );

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
    // Dark Mode function
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <div className="w-full top-0 sticky bg-black/50 backdrop-blur text-white z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
            <span className="text-white ">Techify</span>
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
          {/* Notification Icon */}
          <button className="btn btn-md btn-circle hidden md:block">
            <FiShoppingCart className="text-xl mx-auto" />
          </button>

          {user ? (
            <div className="relative">
              {/* Dropdown Menu */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <button>
                    <img
                      className="w-10 h-10 border rounded-full object-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  </button>
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content menu z-[1] w-80 p-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
                >
                  <div className="rounded-t-lg h-32 overflow-hidden">
                    <img
                      className="object-cover object-top w-full"
                      src={img}
                      alt="Mountain"
                    />
                  </div>
                  <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                      className="object-cover object-center h-32"
                      src={user.photoURL}
                      alt="Woman looking front"
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
                    <Link
                      to="/"
                      className="w-full rounded-full bg-gray-900 hover:shadow-lg text-white px-6 py-2"
                    >
                      Dashboard
                    </Link>
                    <div className="p-2 mt-2">
                      <button
                        onClick={handleSignOut}
                        className="w-full rounded-full bg-gray-900 hover:shadow-lg text-white px-6 py-2"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/signIn" className="btn btn-primary">
              <CgProfile size={15} />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
