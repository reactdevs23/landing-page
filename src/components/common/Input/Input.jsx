import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import classes from "./Input.module.css";
import clsx from "clsx";
import { eyeIcon } from "../../../images";

const Input = ({
  value,
  setValue,
  search,
  placeholder,
  onKeyDown,
  type,
  className,

  noIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={clsx(
        classes.inputContainer,

        className,

        search && classes.searchIconInputContainer
      )}
    >
      {search && !noIcon && <CiSearch className={classes.searchIcon} />}
      <input
        type={showPassword ? "text" : type ? type : "text"}
        onKeyDown={onKeyDown && onKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
        placeholder={placeholder}
        required
      />
      {type === "password" && (
        <>
          {showPassword ? (
            <img
              src={eyeIcon}
              alt="eye"
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <img
              src={eyeIcon}
              alt="eye"
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </>
      )}
      {search && value && (
        <MdClose className={classes.close} onClick={() => setValue("")} />
      )}
    </div>
  );
};

export default Input;
