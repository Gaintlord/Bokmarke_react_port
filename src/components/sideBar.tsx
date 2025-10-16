import { LeftArrow } from "../accets/svgs/leftArrow";
import type React from "react";
import { MenuBar } from "../accets/svgs/menuBar";

export const SideBar = (props: {
  sideBarToggle: boolean;
  setSideBartoggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const changeSidebar = () => {
    props.setSideBartoggle(!props.sideBarToggle);
  };
  return (
    <>
      <div className="w-50% h-full  flex flex-col bg-gray-50">
        {/* head */}
        <div
          className={`m-4 -mb-8 flex-1 flex flex-row items-start justify-between `}
        >
          <div className={`${props.sideBarToggle ? `` : `hidden`} m-2 w-[50%]`}>
            <img src="LogoWText.png" />
          </div>
          <div
            className="cursor-pointer bg-black/40"
            onClick={() => changeSidebar()}
          >
            {props.sideBarToggle ? <LeftArrow /> : <MenuBar />}
          </div>
        </div>
        {/* misc */}
        <div className="bg-green-300 mb-3 mx-3 flex-3">misc</div>
        {/* social */}
        <div className="bg-blue-400 m-3 flex-3">social</div>
        {/* tinkering */}
        <div className="bg-violet-400 m-3 flex-1">tink</div>
      </div>
    </>
  );
};

export default SideBar;
