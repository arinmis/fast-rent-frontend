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
          <div class="input-layout w-72">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="flex justify-end">
              <ErrorText message={errors.email}></ErrorText>
            </div>
          </div>

          <div class="input-layout w-72">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="flex justify-end">
              <ErrorText message={errors.password}></ErrorText>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Link to="#" className="link-primary">
              Forgot Password?
            </Link>
            <button
              onClick={() => {
                console.log("errors", errors);
                if (Object.keys(errors).length === 0) navigate(`/`);
              }}
              className="btn-primary"
              type="submit"
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
