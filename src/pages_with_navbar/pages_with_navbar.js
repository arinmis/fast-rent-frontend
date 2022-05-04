import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const PagesWithNavbar = (props) => {
  return (
    <>
      <div className="layout">
        <Navbar paths={props.paths} />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PagesWithNavbar;
