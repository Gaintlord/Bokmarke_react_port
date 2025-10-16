import "./gradiantBorder.css";

export const GradiantButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <button className="gradientborder max-w-max px-5 py-2 font-bold ">
        {children}
      </button>
    </>
  );
};
