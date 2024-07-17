import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const Button = ({
  children,
  onClick,
  href,
  transparent,
  btnPrimary,
  btnSuccess,
  primitive800,
  primitive900,
  primitive100,
  primitive950,
  wFull,
  className,
  to,
  loading,
  ...rest
}) => {
  return (
    <>
      {onClick ? (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,
            transparent && classes.transparent,
            btnPrimary && classes.btnPrimary,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            primitive100 && classes.primitive100,
            primitive950 && classes.primitive950,
            btnSuccess && classes.btnSuccess,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          onClick={onClick}
          disabled={loading}
        >
          {loading ? (
            <>
              <ImSpinner className={classes.spinner} /> Processing
            </>
          ) : (
            children
          )}
        </button>
      ) : href ? (
        <a
          {...rest}
          className={clsx(
            className,
            classes.button,
            transparent && classes.transparent,
            btnPrimary && classes.btnPrimary,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            primitive100 && classes.primitive100,
            primitive950 && classes.primitive950,
            btnSuccess && classes.btnSuccess,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {loading ? (
            <>
              <ImSpinner className={classes.spinner} /> Processing
            </>
          ) : (
            children
          )}
        </a>
      ) : to ? (
        <Link
          {...rest}
          className={clsx(
            className,
            classes.button,
            transparent && classes.transparent,
            btnPrimary && classes.btnPrimary,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            primitive100 && classes.primitive100,
            primitive950 && classes.primitive950,
            btnSuccess && classes.btnSuccess,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          to={to}
        >
          {loading ? (
            <>
              <ImSpinner className={classes.spinner} /> Processing
            </>
          ) : (
            children
          )}
        </Link>
      ) : (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,
            transparent && classes.transparent,
            btnPrimary && classes.btnPrimary,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            primitive100 && classes.primitive100,
            primitive950 && classes.primitive950,
            btnSuccess && classes.btnSuccess,
            wFull && classes.wFull,
            loading && classes.loading
          )}
        >
          {loading ? (
            <>
              <ImSpinner className={classes.spinner} /> Processing
            </>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

export default Button;
