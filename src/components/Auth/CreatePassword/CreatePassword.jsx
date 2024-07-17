import React from "react";
import { useState } from "react";

import { Button, Input } from "components/common";
import { useNavigate } from "react-router-dom";
const CreatePassword = ({ buttonText, to, setStep }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      <Input
        type="password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        placeholder="Confirm Password"
      />
      <Button
        onClick={() => {
          !setStep && navigate(to ? to : "/login");
          setStep && setStep((prev) => prev + 1);
        }}
        wFull
      >
        {buttonText ? buttonText : "    Save & Finish"}
      </Button>
    </>
  );
};

export default CreatePassword;
