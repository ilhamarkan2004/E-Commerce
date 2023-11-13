import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
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
