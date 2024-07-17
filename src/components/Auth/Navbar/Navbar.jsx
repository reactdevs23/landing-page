import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { mainLogo } from "../../../images";
import Tabs from "../Tabs/Tabs";
import { Button } from "../../common";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className={classes.wrapper}>
      <nav className={classes.nav}>
        {" "}
        <Link to="/">
          {" "}
          <img src={mainLogo} alt="#" className={classes.logo} />
        </Link>
        {sidebar ? (
          <MdClose className={classes.icon} onClick={() => setSidebar(false)} />
        ) : (
          <RxHamburgerMenu
            className={classes.icon}
            onClick={() => setSidebar(true)}
          />
        )}
        <div
          className={clsx(classes.buttonContainer, sidebar && classes.sidebar)}
        >
          <Tabs
            type2
            items={[
              { item: "Login", to: "/login" },
              { item: "Sign-up", to: "/sign-up" },
            ]}
          />
          <Button to="/" transparent className={classes.button}>
            Back To Home
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
