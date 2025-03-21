import DashboardNavbar from "../../Components/DashboardNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Dashboard = () => {
  const navigate = useNavigate()
  const { signOutUser, user} = useAuth();


  const handleSignOut = () => {
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
  
  return (
    <div className="flex h-screen bg-gray-100">
   { /* sidebar */ }
    <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">RentifyTech</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">

          { /* Admin Dashboard */ }
          {user?.role === 'admin' && <AdminDashboard handleSignOut={handleSignOut} />}
          { /* Agent Dashboard */ }
          {user?.role === 'agent' && <AgentDashboard handleSignOut={handleSignOut} />}
          { /* User Dashboard */ }
          {user?.role === 'user' && <UsersDashboard handleSignOut={handleSignOut} />}
        </div>
    </div>

   { /* main content */ }
    <div className="flex flex-col flex-1 overflow-y-auto">
        <div>
            <DashboardNavbar user={user} />
        </div>
        <div className="m-2 p-3 bg-white rounded-lg">
          <Outlet />
        </div>
    </div>
    
</div>
  );
};

export default Dashboard;
