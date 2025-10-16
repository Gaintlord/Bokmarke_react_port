import { Link } from "react-router-dom";
import Button from "./LiquidGlass/Button";

export const HeroSection = () => {
  return (
    <>
      <div className="flex-2 bg-black/0 flex  justify-center items-end ">
        <img
          className="shadow-2xl w-[10%] rounded-[25%]"
          src={"Squarelogo.png"}
        ></img>
      </div>
      <div className="  flex-2 flex w-[70vw]  mx-[20%] mt-10 text-center flex-col align-top ">
        <p className={`suse bg-black/0 text-gray-900 inline text-8xl`}>
          For every Link that deserves
        </p>
        <p className={`suse text-8xl font-mono text-gray-500 max-h-min`}>
          To be a Bookmark
        </p>
        <p className={`oswald text-black text-2xl`}>
          save links from any part of internet{" "}
        </p>
      </div>
      <div className="bg-black/0 flex-2 text-sm md:text-xl lg:text-2xl xl:text-3xl mt-[5%] flex items-start">
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </>
  );
};
