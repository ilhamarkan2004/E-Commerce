import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

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
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
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
