import logo from "../assets/logo.png";
import LoginForm from "./login_form";
import SingupForm from "./singup_form";

const Login = () => {
  return (
    <div className="layout">
      <div className="main-content">
        <div className="mb-2 md:m-10 grid-cols-1 text-center">
          <p className="text-6xl md:text-8xl text-slate-600">FastRent</p>
        </div>

        <div className="grid gap-y-5 grid-cols-1 md:grid-cols-2 content-center ">
          <div className="flex justify-end">
            <img className="hidden h-96 sm:block" src={logo} alt="logo" />
          </div>
          <div className="flex justify-center items-center ">
            <div className="grid gap-5 divide-y card">
              <LoginForm />
              <div className="pt-5">
                <SingupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
