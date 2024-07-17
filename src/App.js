import { Route, Routes } from "react-router-dom";
import AuthenticationLayout from "./Layout/AuthenticationLayout/AuthenticationLayout";
import Signup from "./pages/Authentication/Signup/Signup";
import Login from "./pages/Authentication/Login/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword";
import PasswordUpdated from "./pages/Authentication/ForgotPassword/PasswordUpdated/PasswordUpdated";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        {/* Home */}

        <Route path="" element={<HomeLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>

        {/* Authentication */}
        <Route path="" element={<AuthenticationLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/password-updated" element={<PasswordUpdated />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
