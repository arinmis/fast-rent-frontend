import React from "react";
import AuthContext from "../store/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";

const RequireAuth = () => {
  const { isAuth } = useContext(AuthContext);
  let location = useLocation();
  console.log("location is", location);
  console.log("is auth", isAuth);

  // redirect to login if user does not
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
