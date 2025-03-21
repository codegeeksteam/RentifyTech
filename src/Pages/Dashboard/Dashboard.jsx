import DashboardNavbar from "../../Components/DashboardNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import UsersDashboard from "./UsersDashboard";


const Dashboard = () => {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth();


  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "User Log out successfully!",
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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">RentifyTech</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <UsersDashboard handleSignOut={handleSignOut} />
          {/* Admin Dashboard */}
          {/* {users === "Admin" && (
            <nav className="flex-1 px-2 py-4 bg-gray-700">
              <NavLink>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  Admin Dashboard
                </a>
              </NavLink>
              <div className="divider divider-neutral"></div>
              <div className="flex flex-col justify-between bg-gray-700">
                <NavLink to={"/"} className="flex-1">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
                  >
                    <FaHome />
                    Home
                  </a>
                </NavLink>
                <NavLink className="flex-2">
                  <a
                    onClick={handleSignOut}
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
                  >
                    <CiLogout size={18} /> Logout
                  </a>
                </NavLink>
              </div>
            </nav>
          )} */}
          {/* Agent Dashboard */}
          {/* {users === "Agent" && (
            <nav className="flex-1 px-2 py-4 bg-gray-700">
              <NavLink>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  Admin Dashboard
                </a>
              </NavLink>
              <div className="divider divider-neutral"></div>
              <div className="flex flex-col justify-between bg-gray-700">
                <NavLink to={"/"} className="flex-1">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
                  >
                    <FaHome />
                    Home
                  </a>
                </NavLink>
                <NavLink className="flex-2">
                  <a
                    onClick={handleSignOut}
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
                  >
                    <CiLogout size={18} /> Logout
                  </a>
                </NavLink>
              </div>
            </nav>
          )} */}
          {/* User Dashboard */}
          {/* {users === "User" && (
            <nav className="flex-1 px-2 py-4 bg-gray-700">
              <NavLink>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  Admin Dashboard
                </a>
              </NavLink>
              <div className="divider divider-neutral"></div>
              <div className="flex flex-col justify-between bg-gray-700">
                <NavLink to={"/"} className="flex-1">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
                  >
                    <FaHome />
                    Home
                  </a>
                </NavLink>
                <NavLink className="flex-2">
                  <a
                    onClick={handleSignOut}
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
                  >
                    <CiLogout size={18} /> Logout
                  </a>
                </NavLink>
              </div>
            </nav>
          )} */}
        </div>
      </div>

      {/* main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="sticky top-0">
          <div className="">
            {" "}
            <DashboardNavbar user={user} />
          </div>
        </div>
        <div className="m-2 p-3 bg-white rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
