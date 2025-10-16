import { useState } from "react";
import SideBar from "../components/sideBar";

const Dashboard = () => {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  return (
    <div className="bg-blue-200 w-full h-screen">
      {/* home grid */}
      <div className="flex flex-row">
        {/* sidebar */}
        <div
          className={`${
            sideBarToggle ? `flex-6` : `flex-1`
          } duration-500 bg-black/40`}
        >
          <SideBar
            setSideBartoggle={setSideBarToggle}
            sideBarToggle={sideBarToggle}
          />
        </div>
        {/* restofthescreen */}
        <div className=" flex-24 h-screen flex flex-col">
          {/* topbar */}
          <div className="flex-1 bg-amber-400">she</div>
          {/* mainbody */}
          <div className="flex-11 bg-red-400">rrr</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
