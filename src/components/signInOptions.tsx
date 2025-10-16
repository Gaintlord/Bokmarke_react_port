import React from "react";

export const SignInOptions = ({
  typeIcon,
  className,
  type,
}: {
  typeIcon: React.ReactNode;
  className: string;
  type: string;
}) => {
  return (
    <div
      className={`w-full py-1 flex font-mono rounded-md active:translate-y-1 duration-200 my-2 ${className}`}
    >
      <div className="size-8 ml-[5%] mr-[8%]">{typeIcon}</div>
      <div className="text-xl mx-[3%]">Continue with</div>
      <div className="text-xl font-bold">{type}</div>
    </div>
  );
};
