export const OrdinaryButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <button className="border-amber-50  border-1 rounded-xl cursor-pointer  bg-[rgb(213,231,235)] max-w-max px-5 py-2 font-mono font-bold hover:scale-110 duration-200  active:translate-y-1 text-blue-950">
        {children}
      </button>
    </>
  );
};
