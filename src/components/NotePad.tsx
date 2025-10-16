import type { ReactNode } from "react";

export default function NotePad({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="relative bg-yellow-300 -z-1 h-full pt-[15%] p-[10%] text-gray-900 ">
          {children}
        </div>
        <div className="absolute top-0 left-0 bg-black/30 -z-10 w-full h-full scale-100 blur-xs "></div>
      </div>
    </>
  );
}
