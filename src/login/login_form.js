import { Formik } from "formik";
import { Link } from "react-router-dom";
import ErrorText from "../components/error_text";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              placeholder="name@company.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="flex justify-end">
              <ErrorText message={errors.email}></ErrorText>
            </div>
          </div>

          <div class="mb-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              required=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="flex justify-end">
              <ErrorText message={errors.password}></ErrorText>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="#"
              class="text-sm text-sky-700 hover:underline dark:text-sky-500"
            >
              Forgot Password?
            </Link>
            <button
              onClick={() => {
                console.log("errors", errors);
                if (Object.keys(errors).length === 0) navigate(`/`);
              }}
              type="submit"
              class=" text-black bg-sky-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-200 dark:focus:ring-sky-800"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default LoginForm;
