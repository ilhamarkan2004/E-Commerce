import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const handleLogin = (event) => {
  event.preventDefault();
  localStorage.setItem('email', event.target.email.value);
  localStorage.setItem('password', event.target.password.value);
  console.log(event.target.email.value);
  console.log(event.target.password.value);
  console.log("dipenct");
  window.location.href='/products';
};
const FormLogin = () => {
  const emailRef = useRef(null);
  useEffect(()=>{emailRef.current.focus()},[])
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        ref={emailRef}
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
    </form>
  );
};
export default FormLogin;
