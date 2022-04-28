import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";
import NavbarUser from "../../components/navbar_user";

const UserPages = (props) => {
  return (
    <>
      <NavbarUser />
      <div className="layout">
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserPages;
