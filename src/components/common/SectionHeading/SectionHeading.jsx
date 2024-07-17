import React from "react";
import classes from "./SectionHeading.module.css";
import { Heading } from "components/common";
import { logo } from "images";
const SectionHeading = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="Logo" className={classes.logo} />
      <Heading primaryDefault semiBold xl2>
        {children}
      </Heading>
    </div>
  );
};

export default SectionHeading;
