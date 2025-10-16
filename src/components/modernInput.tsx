import QuestionMark from "../accets/svgs/questionMark";

export const ModernInput = ({
  placeholder,
  type,
  className,
  forType,
  toolTipMsg,
  typeIcon,
  propRef,
  isNull,
  isError,
  userError,
}: {
  placeholder: string;
  type: string;
  className: string;
  forType: string;
  toolTipMsg: string;
  typeIcon: React.ReactNode;
  propRef?: React.RefObject<HTMLInputElement | null>;
  isNull?: boolean;
  isError?: boolean;
  userError?: string;
}) => {
  return (
    <>
      <div className={` text-black w-full max-h-max ${className} `}>
        <div className="flex flex-row justify-between">
          <div>
            <span className="text-gray-600 text-[80%] ml-1 font-mono font-medium">
              {forType}
            </span>
            <span className="text-blue-500 ml-1">*</span>
          </div>
          <span className="text-right mr-2 text-red-400 font-mono font-medium text-sm mt-1">
            {isError ? `${userError}` : ``}
          </span>
        </div>
        {/* {isError ? ``} */}
        <div className="relative">
          <div className="absolute top-1/4  items-center size-5 mx-2 opacity-55 ">
            {typeIcon}
          </div>
          {/* main input */}
          <input
            placeholder={placeholder}
            type={type}
            ref={propRef}
            className={`w-full rounded-lg placeholder:text-gray-300 place pl-8 pr-12 py-1 flex justify-center font-mono font-light shadow-md ring-1  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:duration-500 
              ${isNull || isError ? `ring-red-400` : `ring-gray-400`}`}
          />
          {/* main input */}
          <span className="absolute peer size-5 top-1/4 right-[5%] cursor-pointer">
            <div className="peer opacity-55 text-red-500">
              <QuestionMark
                strokeColor={`${isNull || isError ? "#ff0000" : "#000000"}`}
              ></QuestionMark>
            </div>
            <div className="absolute -top-[125%] -left-[100%] bg-black font-bold rounded-md text-white text-sm w-max px-3 text-center opacity-0  peer-hover:opacity-100  transition-opacity pointer-events-none duration-300">
              {toolTipMsg}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
