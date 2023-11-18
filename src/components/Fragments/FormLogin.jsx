import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const usernameRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // console.log("dipenct");
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);


  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Mohammad Ilham Arkan"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <Button classname="bg-green-600" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-600 mt-5">{loginFailed}</p>}
    </form>
  );
};
export default FormLogin;
