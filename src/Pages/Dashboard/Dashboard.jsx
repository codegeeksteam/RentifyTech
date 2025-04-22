import { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import UsersDashboard from "./UsersDashboard";
import useAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";
import useUser from "../../Hooks/useUser";
import AdminDashboard from "./AdminDashboard";
import AgentDashboard from "./AgentDashboard";
import {  FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();
  const [isUser] = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for Desktop */}
      <div className="w-64 bg-gray-800 hidden md:flex flex-col lg:w-72">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">RentifyTech</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          {isAdmin && <AdminDashboard handleSignOut={handleSignOut} />}
          {isAgent && <AgentDashboard handleSignOut={handleSignOut} />}
          {isUser && <UsersDashboard handleSignOut={handleSignOut} />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 z-50 md:hidden transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64`}
      >
        <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
          <span className="text-white font-bold uppercase">RentifyTech</span>
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          {isAdmin && <AdminDashboard handleSignOut={handleSignOut} />}
          {isAgent && <AgentDashboard handleSignOut={handleSignOut} />}
          {isUser && <UsersDashboard handleSignOut={handleSignOut} />}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-y-auto w-full md:w-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between md:justify-end bg-white p-4 md:p-0">
          <DashboardNavbar toggleSidebar={toggleSidebar} user={user} />
        </div>
        <div className="m-2 p-3 min-h-screen rounded-lg">
          <Outlet />
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;