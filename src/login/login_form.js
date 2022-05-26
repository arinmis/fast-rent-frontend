import { Formik } from "formik";
import { Link, useLocation } from "react-router-dom";
import ErrorText from "../components/error_text";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuth } = useContext(AuthContext);
  console.log("location", location);

  /* route with considering user type */
  const findNextRoute = (isManager) => {
    const homePath = isManager ? "/manager" : "/";
    // consider next path
    const nextPath =
      location.state && location.state.from.patname !== "/login"
        ? location.state.from.pathname
        : null;
    console.log("next path: ", nextPath);
    return nextPath ? nextPath : homePath;
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
          const token = response.data.access;
          console.log("here is token, ", token);
          const decoded = jwtDecode(token);
          console.log("decoded", decoded);
          const nextPath = findNextRoute(decoded["is_staff"]);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          console.log(
            "auth header",
            axios.defaults.headers.common["Authorization"]
          );
          setIsAuth(true); // make it true after auth
          localStorage.setItem("access", token);
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
