import React from "react";
import classes from "./HomeLayout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "components/Home/Footer/Footer";
import Navbar from "components/Home/Navbar/Navbar";
const HomeLayout = () => {
  return (
    <main>
      <Navbar />
      <div className={classes.outlet}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
