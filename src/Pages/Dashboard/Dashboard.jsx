import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../Components/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="flex mx-auto min-h-screen w-full">
      {/* left side */}
      <div className="w-[20%] border">Left Side</div>
      {/* right side */}
      <div className="w-[80%] border ">
        <DashboardNavbar />
        <div className="lg:p-5">
            Content
            <Outlet />
            </div>
      </div>
    </div>
  );
};

export default Dashboard;
