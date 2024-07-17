import clsx from "clsx";
import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button } from "../../common";
import classes from "./Verify.module.css";
import { useNavigate } from "react-router-dom";

const renderButton = (buttonProps) => {
  return (
    <button {...buttonProps} className={classes.resend}>
      {buttonProps.remainingTime !== 0
        ? `Resend  (${buttonProps.remainingTime})s`
        : "Resend"}
    </button>
  );
};
const renderTime = () => React.Fragment;

const Verify = ({
  noResend,

  otpInvalid,
  setOtpInvalid,
  otp,
  setOTP,
  handler,
  to,
  setStep,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.inputs}>
        <OTPInput
          inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
          value={otp}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
        />
      </div>

      {otpInvalid && (
        <div className={classes.helperError}>
          Please enter valid verification code.
        </div>
      )}

      <div className={clsx(classes.actions, noResend && classes.fullWidth)}>
        <Button
          // to={redirect || "/forgot-password"}
          onClick={(e) => {
            handler(e);
            navigate(to ? to : "");
            setStep && setStep((prev) => prev + 1);
          }}
          size="md"
          btnPrimary
        >
          Verify
        </Button>
        {!noResend && (
          <ResendOTP
            renderButton={renderButton}
            renderTime={renderTime}
            action={() => alert("vvv")}
          />
        )}
      </div>
    </>
  );
};

export default Verify;
