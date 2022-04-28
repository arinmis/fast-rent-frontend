import { Outlet } from "react-router-dom";
import NavbarUser from "../../components/navbar_user";

const UserPages = (props) => {
  return (
    <>
      <div className="layout">
      <NavbarUser />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserPages;
