import { Link } from "react-router-dom";

export const HomeLogoAncher = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Link to="/" replace={true}>
        <img className={`block w-full`} src={"LogoWText.png"}></img>
      </Link>
    </div>
  );
};
