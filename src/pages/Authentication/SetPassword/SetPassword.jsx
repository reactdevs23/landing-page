import React from "react";

import classes from "./SetPassword.module.css";
import Header from "../../../components/Auth/Header/Header";
import CreatePassword from "../../../components/Auth/CreatePassword/CreatePassword";

const SetPassword = ({ setStep, buttonText, info }) => {
  return (
    <div className={classes.wrapper}>
      <Header heading="Set Password" info={info} />
      <CreatePassword setStep={setStep} buttonText={buttonText} />
    </div>
  );
};

export default SetPassword;
