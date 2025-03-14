import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
// import useAuth from "../services/useAuth";
// import useData from "../services/useData";

export default function Navbar() {
  // const { logout, user } = useAuth();
  const { logout, user } = true;
  // const { setDarkMode, darkMode } = useData(); //this state value false?
  const { setDarkMode, darkMode } = false;
  const links = (
    <>
      <div>
        <NavLink className=" font-semibold" to={"/"}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className="font-semibold " to={"/shop"}>
          Shop
        </NavLink>
      </div>
      <div>
        <NavLink className="font-semibold" to={"/all-gadgets"}>
          All Gadgets
        </NavLink>
      </div>
      <div>
        <NavLink className="font-semibold" to={"/Faq"}>
          FAQ
        </NavLink>
      </div>
      <div>
        {user ? (
          <>
            <NavLink
              className="hover:bg-transparent dark:text-gray-300 font-semibold transition-all duration-200 hover:focus:bg-transparent hover:text-[#0e9f6e]"
              to={"/liked"}
            >
              Liked Gadgets
            </NavLink>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        {user ? (
          <>
            <NavLink
              className="hover:bg-transparent dark:text-gray-300 font-semibold transition-all duration-200 hover:focus:bg-transparent hover:text-[#0e9f6e]"
              to={"/my-gadgets"}
            >
              My Gadgets
            </NavLink>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode(true);
      document.body.classList.add("light");
    }
  }, []);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");

      // Apply dark mode to the body tag
      if (newMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      return newMode;
    });
  };

  return (
    <div className="   w-full top-0 sticky bg-white text-black    z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 lg:hidden"
            >
              {/* className="h-5 w-5" */}
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
            {/* <span className="mr-1 p-1 bg-green-500"></span> */}
            <span className="text-indigo-400 ">Shop</span>
            <span className="text-green-500 italic font-4xl ">Now</span>
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
          {user ? (
            <div className="flex items-center gap-2">
              <Link
                onClick={async () => {
                  await logout();
                  toast.success("Logout success");
                }}
                className="btn btn-sm bg-red-500 dark:bg-red-700 dark:border-slate-900 hover:bg-red-600 text-white rounded-md"
              >
                Logout
              </Link>
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dark:shadow-sm dark:bg-slate-900  dark:text-gray-400 dropdown-content gap-2 bg-base-100 rounded-box z-[1] mt-3 w-64 p-4 shadow"
                ></ul>
              </div>
            </div>
          ) : (
            <NavLink
              to={"/auth/login"}
              className="btn btn-sm hover:bg-indigo-500  hover:text-white bg-green-300      text-indigo-700  rounded-md"
            >
              Join Now
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
