import Login from "./login/login";
import SelectDate from "./user/select_date/select_date.js";
import Steps from "./user/steps/steps";
import UserReservations from "./user/reservations/reservations";
import UserRents from "./user/rents/rents";
import Settings from "./user/settings/settings";
import Cars from "./manager/cars/cars";
import ManagerRents from "./manager/rents/rents";
import ManagerReservations from "./manager/reservations/reservations";
import Statistics from "./manager/statistics/stastistics";
import PagesWithNavbar from "./pages_with_navbar/pages_with_navbar";
import RequireAuth from "./components/require_auth";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/AuthContext";

function App() {
  const { setIsAuth, isAuth } = useContext(AuthContext);
  const pathOfPagesUser = ["rents", "reservations"];
  const pathOfPagesManager = ["rents", "reservations", "cars", "statistics"];

  // set auth state before app rendering
  if (!isAuth) setIsAuth(localStorage.getItem("access") ? true : false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<PagesWithNavbar paths={pathOfPagesUser} />}>
            <Route index element={<SelectDate />} />
            <Route path="steps" element={<Steps />} />
            <Route path="rents" element={<UserRents />} />
            <Route path="reservations" element={<UserReservations />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route
            path="/manager"
            element={<PagesWithNavbar paths={pathOfPagesManager} />}
          >
            <Route index element={<Navigate to="cars" replace />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="rents" element={<ManagerRents />} />
            <Route path="cars" element={<Cars />} />
            <Route path="reservations" element={<ManagerReservations />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
