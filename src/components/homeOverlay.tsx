import Folder from "./Folder";
import NotePad from "./NotePad";

export const HomeOverlay = () => {
  return (
    <>
      <div className="absolute w-[18%] h-[30%] top-44 -left-5  text-black rotate-12 hover:scale-105 duration-150">
        <Folder></Folder>
      </div>
      <div className="absolute w-[12%] h-[35%] top-30 left-20 rotate-[-8deg] -z-1 hover:scale-105 hover:rotate-0 duration-350">
        <NotePad>
          <img
            className="w-[20%] -mt-[38%] ml-[80%]"
            src={"paperPin.png"}
          ></img>
          <div>I just liked this, why shouln't i put it in bokmarke</div>
        </NotePad>
      </div>
      <div className="absolute w-[18%] h-[30%] -bottom-5 left-36 -rotate-3 -z-1 hover:scale-105 duration-150">
        <Folder>
          <img
            className="absolute -top-12 -left-2 w-[25%] rounded-lg m-3"
            src={"youtube/youtubeLogo.png"}
          ></img>
          <img
            className="w-[90%] rounded-xl m-3"
            src={"youtube/youtubeBg1.png"}
          ></img>
          <img
            className="w-[90%] rounded-xl m-3"
            src={"youtube/youtubeBg2.png"}
          ></img>
          <img
            className="w-[90%] rounded-xl m-3"
            src={"youtube/youtubeBg3.png"}
          ></img>
        </Folder>
      </div>
      <div className="absolute w-[18%] h-[30%] bottom-10 right-20 rotate-6 -z-1 hover:scale-105 duration-150">
        <Folder>
          <div className="flex  items-center flex-col">
            <div className="text-xs font-mono rounded-lg -mt-[1%] mb-2  xl:text-md 2xl:text-lg">
              Bookmark from every website
            </div>
            <img className="w-[50%] rounded-xl" src={"webAppIcon.png"}></img>
          </div>
        </Folder>
      </div>
      <div className="absolute w-[18%] h-[30%] top-24 -right-20 rotate-6 -z-1  hover:scale-105 duration-150 ">
        <Folder></Folder>
      </div>
      <div className="absolute w-[18%] h-[30%] top-64 -right-48 rotate-[20deg] -z-1 hover:scale-105 duration-150 ">
        <Folder></Folder>
      </div>
    </>
  );
};
