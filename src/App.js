import Login from "./user/login/login";
import NavbarUser from "./components/navbar_user";
import SelectDate from "./user/select_date/select_date.js";
import Steps from "./user/steps/steps";
import Reservations from "./user/reservations/reservations";
import Rents from "./user/rents/rents";
import Settings from "./user/settings/settings";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarUser />
              <SelectDate />
            </>
          }
        />
        <Route
          path="/steps"
          element={
            <>
              <NavbarUser />
              <Steps />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/rents"
          element={
            <>
              <NavbarUser />
              <Rents />
            </>
          }
        />
        <Route
          path="/reservations"
          element={
            <>
              <NavbarUser />
              <Reservations />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <NavbarUser />
              <Settings />
            </>
          }
        />
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
