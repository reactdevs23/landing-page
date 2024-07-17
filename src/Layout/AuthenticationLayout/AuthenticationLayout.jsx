import React from "react";
import classes from "./AuthenticationLayout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Auth/Navbar/Navbar";
import Footer from "../../components/Auth/Footer/Footer";

const AuthenticationLayout = () => {
  return (
    <main className={classes.wrapper}>
      <Navbar />
      <div className={classes.outlet}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default AuthenticationLayout;
