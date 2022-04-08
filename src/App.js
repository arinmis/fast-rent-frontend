import Login from "./user/login/login";
import NavbarUser from "./components/navbar_user";
import SelectDate from "./user/select_date/select_date.js";
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
