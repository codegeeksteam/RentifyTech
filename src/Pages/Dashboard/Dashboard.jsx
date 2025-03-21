import DashboardNavbar from "../../Components/DashboardNavbar";
import { Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">

   { /* sidebar */ }
    <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">RentifyTech</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <AdminDashboard />
          { /* Dashboard Nav */ }
          { /* Admin Dashboard */ }
          {/* {user.role === 'admin' && <AdminDashboard />} */}
          { /* Agent Dashboard */ }
          {/* {user.role === 'agent' && <AgentDashboard />} */}
          { /* User Dashboard */ }
          {/* {user.role === 'user' && <UsersDashboard />} */}
        </div>
    </div>

   { /* main content */ }
    <div className="flex flex-col flex-1 overflow-y-auto">
        <div>
            <DashboardNavbar />
        </div>
        <div className="m-2 p-3 bg-white rounded-lg">
          <Outlet />
        </div>
    </div>
    
</div>
  );
};

export default Dashboard;
