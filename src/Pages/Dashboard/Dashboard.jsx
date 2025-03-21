import DashboardNavbar from "../../Components/DashboardNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth();
  const [users, setUsers] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
  allData()
  },[])

  const allData = async () => {
    const res = await axiosPublic.get("/all-users")
    const newData = res.data?.map((e) => (e.role))
    setUsers(newData)
  }

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
          {/* Admin Dashboard */}
          {users === "Admin" && <AdminDashboard handleSignOut={handleSignOut} />}
          {/* Agent Dashboard */}
          {users === "Agent" && <AgentDashboard handleSignOut={handleSignOut} />}
          {/* User Dashboard */}
          {users === "User" && <UsersDashboard handleSignOut={handleSignOut} />
          }
        </div>
      </div>

      {/* main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="sticky top-0">
        <div className="">  <DashboardNavbar user={user} /></div>
        </div>
        <div className="m-2 p-3 bg-white rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
