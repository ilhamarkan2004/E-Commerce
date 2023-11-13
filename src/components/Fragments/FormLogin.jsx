import InputForm from "../Elements/Input";
import Button from "../Elements/Button";



const FormLogin = () => {
    return (
      <form action="">
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
        <Button classname="bg-green-600">Login</Button>
      </form>
    );
}
export default FormLogin;