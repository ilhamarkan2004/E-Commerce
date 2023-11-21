import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-600"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 p-2 bg-black text-white rounded" onClick={()=>setIsDarkMode(!isDarkMode)}>{isDarkMode? "Light" : "Dark"}</button>
        <h1 className="text-green-600 font-bold text-3xl mb-2">{title}</h1>
        <p className="font- text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center text-green-600">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold ">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center text-green-600">
        Already have an account?{" "}
        <Link to="/login" className="font-bold ">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
