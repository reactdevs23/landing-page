import Verify from "components/Auth/Verify/Verify";
import React from "react";
import { useState } from "react";
import classes from "./Verification.module.css";
import Header from "../../../components/Auth/Header/Header";
const Verification = ({ heading, info, setStep }) => {
  const [data, setData] = useState({});
  const [otpInvalid, setOtpInvalid] = useState(false);
  const [OTP, setOTP] = useState("");

  return (
    <div className={classes.wrapper}>
      <Header heading={heading} info={info} />
      <Verify
        data={data}
        handler={() => {}}
        otp={OTP}
        setOTP={setOTP}
        setOtpInvalid={setOtpInvalid}
        setStep={setStep && setStep}
      />
    </div>
  );
};

export default Verification;
