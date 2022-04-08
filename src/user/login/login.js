import logo from "../../assets/logo.png";
import LoginForm from "./login_form";
import SingupForm from "./singup_form";

const Login = () => {
  return (
    <div className="h-screen">
      <div className=" m-2 md:m-10 grid-cols-1 text-center">
        <p className="text-6xl md:text-9xl font-bold">FastRent</p>
      </div>

      <div className="grid gap-y-20 grid-cols-1 md:grid-cols-2 content-center ">
        <div className="flex justify-end">
          <img className="hidden h-96 md:block" src={logo} alt="logo" />
        </div>
        <div className="flex justify-center items-center ">
          <div className="divide-y p-10 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <LoginForm />
            <div className="pt-6">
              <SingupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
