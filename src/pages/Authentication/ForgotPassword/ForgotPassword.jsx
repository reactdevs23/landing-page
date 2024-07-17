import React, { useState } from "react";
import classes from "./ForgotPassword.module.css";
import Header from "../../../components/Auth/Header/Header";
import { Button, Input } from "../../../components/common";

import SetPassword from "../SetPassword/SetPassword";
import Verification from "../Verification/Verification";
import PasswordUpdated from "./PasswordUpdated/PasswordUpdated";
const ForgotPassword = () => {
  const [value, setValue] = useState("");

  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && (
        <div className={classes.wrapper}>
          <Header heading="Forgot Password" />
          <Input value={value} setValue={setValue} placeholder="EmailOrPhone" />
          <Button
            wFull
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
          >
            Reset Password
          </Button>
        </div>
      )}
      {step === 2 && (
        <Verification
          heading="Verify Your Email/Phone"
          info="We send 6 digit verification code to your email/phone. Please check your inbox."
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <SetPassword
          heading="Verify Your Email/Phone"
          info="Your email/phone is verified. Enter a password to make your account secure."
          setStep={setStep}
          buttonText="Save Password"
        />
      )}
      {step === 4 && <PasswordUpdated />}
    </>
  );
};

export default ForgotPassword;
