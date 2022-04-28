import Login from "./login/login";
import SelectDate from "./user/select_date/select_date.js";
import Steps from "./user/steps/steps";
import Reservations from "./user/reservations/reservations";
import Rents from "./user/rents/rents";
import Settings from "./user/settings/settings";
import UserPages from "./user/user_pages/user_pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPages />}>
          <Route path="" element={<SelectDate />} />
          <Route path="steps" element={<Steps />} />
          <Route path="rents" element={<Rents />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="settings" element={<Settings />} />
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
