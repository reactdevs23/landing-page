import React from "react";
import classes from "./PasswordUpdated.module.css";
import Header from "../../../../components/Auth/Header/Header";
import { Button } from "../../../../components/common";
import { passwordupdated } from "../../../../images";

const PasswordUpdated = () => {
  return (
    <div className={classes.wrapper}>
      <img src={passwordupdated} alt="#" className={classes.img} />
      <Header
        heading="Password Updated!"
        info="Your password has been updated. Now you can login your account with new password."
      ></Header>
      <Button to="/login">Login</Button>
    </div>
  );
};

export default PasswordUpdated;
