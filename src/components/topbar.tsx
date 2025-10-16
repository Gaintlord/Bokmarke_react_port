import { Link } from "react-router-dom";
import { GradiantButton } from "./GradiantBorder/gradiantButton";

import { OrdinaryButton } from "./ordinaryButton";
import { HomeLogoAncher } from "./homeLogoAncher";

export const Topbar = () => {
  return (
    <>
      <div className=" flex-3 flex items-center justify-center ">
        <HomeLogoAncher className="w-[30%] "></HomeLogoAncher>
      </div>
      <div className=" flex-2 justify-between font-mono items-center flex px-[1%] text-lg font-bold text-gray-600 ">
        <div>Features</div>
        <div>Pricing</div>
        <div>Pricing</div>
        <div>Pricing</div>
      </div>
      <div
        className="flex-3 flex justify-center 
      text-xs "
      >
        <div className="z-0 px-[10%] flex text-sm font-mono">
          <Link to="Login">
            <OrdinaryButton>Login</OrdinaryButton>
          </Link>
        </div>
        <div className="z-0 text-sm font-mono font-bold hover:scale-110 duration-300 flex active:translate-y-1 ">
          <Link to="/signup">
            <GradiantButton>Get Started</GradiantButton>
          </Link>
        </div>
      </div>
    </>
  );
};
