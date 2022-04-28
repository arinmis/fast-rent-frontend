import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";

const UserPages = (props) => {
  console.log("props", props);
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

export default UserPages;
