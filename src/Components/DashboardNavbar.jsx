import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ user, toggleSidebar }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Menu Icon for Mobile */}
      <button
        className="md:hidden mx-3 text-gray-800 focus:outline-none"
        onClick={toggleSidebar}
      >
        <RiMenu2Fill size={24} />
      </button>
      <div className="flex-1">
        {/* Search btn */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered lg:w-80 md:w-40"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        {/* Notification Icon */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6.5 w-6.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {/*User Name */}
        <div>{user?.displayName}</div>
        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to={"/dashboard/adminProfile"}>
              <a className="justify-between">Profile</a>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
