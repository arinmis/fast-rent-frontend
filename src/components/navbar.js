import logo from "../assets/logo.png";
import { UserCircleIcon, MenuIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// see: https://heroicons.com/

const Navbar = (props) => {
  // create links from given paths
  const [isSettingsShown, setIsSettingsShown] = useState(false);
  const [isSmallNavlinkShown, setIsSmallNavlinkShown] = useState(false);

  /* close setting dropdown when click happend */
  document.addEventListener("click", (e) => {
    setIsSettingsShown(false);
    setIsSmallNavlinkShown(false);
  });

  return (
    <nav class="bg-sky-200 w-screen ">
      <div className="nav-content container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="" className="flex items-center">
          <img src={logo} className="mr-3  h-12" alt="FastRent logo" />
          FastRent
        </NavLink>
        <div className="flex items-center ">
          <ul className="sm:flex hidden">
            {props.paths.map((path) => (
              <li key={path} className="mx-5 flex items-center">
                <NavLink to={path}>
                  {path.substring(0, 1).toUpperCase() + path.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="relative sm:block hidden">
            <button
              type="button"
              onClick={(e) => {
                console.log("isSettingsShown", !isSettingsShown);
                e.stopPropagation();
                setIsSettingsShown(!isSettingsShown);
              }}
              class="flex text-sm bg-gray-800 rounded-full"
            >
              <span class="sr-only">Open user menu</span>
              <UserCircleIcon className="h-10 w-10 text-white	" />
            </button>
            <div
              className={`w-36 absolute right-0 bg-sky-600 text-center z-50  
                ${isSettingsShown ? "visible" : "invisible"}
                `}
            >
              <ul class="py-1">
                <li>
                  <NavLink to="/settings">Settings</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Log out</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:hidden block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSmallNavlinkShown(!isSmallNavlinkShown);
              }}
            >
              <MenuIcon className="h-10 w-10 text-white	" />
            </button>
          </div>
        </div>
      </div>
      <ul
        className={`${
          isSmallNavlinkShown ? "grid" : "hidden"
        } grid-cols text-center divide-y-2`}
      >
        {props.paths.map((path) => (
          <li key={path}>
            <NavLink to={path}>
              {path.substring(0, 1).toUpperCase() + path.slice(1)}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="settings">Settings</NavLink>
        </li>
        <li>
          <NavLink to="/login">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
