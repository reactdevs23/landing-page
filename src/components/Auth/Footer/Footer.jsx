import React from "react";
import classes from "./Footer.module.css";
import { logo } from "../../../images";
import { Text } from "../../common";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <Text textTeritary base>
        © 2024 Brandname. All rights reserved.
      </Text>
      <img src={logo} alt="#" className={classes.logo} />
    </footer>
  );
};

export default Footer;
