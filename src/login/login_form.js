import { Formik } from "formik";
import { Link, useLocation } from "react-router-dom";
import ErrorText from "../components/error_text";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuth } = useContext(AuthContext);
  console.log("location", location);
  const handleLogin = async (e) => {
    console.log("here");
    const nextPath = location.state?.from ? location.state.from.pathname : "/";
    const response = await axios.post("/token/", {
      username: "arinmis",
      password: "asdf4040.",
    });
    // check whether the auth is successfull
    if (response.status === 200) {
      localStorage.setItem("access", response.data.access);
      setIsAuth(true); // make it true after auth
      navigate(nextPath);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors = {};
        /*
        if (!values.username) {
          errors.username = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
        ) {
          errors.username = "Invalid username address";
        }
        */
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        /*
         */
        // check whether the auth is successfull
        try {
          const response = await axios.post("/token/", {
            username: values.username,
            password: values.password,
          });
          console.log(response.status);
          console.log("here");
          localStorage.setItem("access", response.data.access);
          const nextPath = location.state?.from
            ? location.state.from.pathname
            : "/";
          setIsAuth(true); // make it true after auth
          navigate(nextPath);
        } catch {
          alert("Something went wrong");
        }
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
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="arinmis"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <div className="flex justify-end">
              <ErrorText message={errors.username}></ErrorText>
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
            <button className="btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default LoginForm;
