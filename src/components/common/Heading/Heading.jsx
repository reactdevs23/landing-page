import React from "react";
import classes from "./Heading.module.css";
import clsx from "clsx";
const Heading = ({
  children,
  xs,
  md,
  sm,
  base,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  xl5,
  xl6,
  xl7,
  primaryDefault,
  successDefault,
  textTeritary,
  textPrimitive,
  textWhite,
  primary,
  secondary,
  info,
  baseWhite,
  semiBold,
  bold,
  font600,
  textCenter,
  textRight,
  className,
  regular,
}) => {
  return (
    <h2
      className={clsx(
        classes.heading,
        primaryDefault && classes.primaryDefault,
        successDefault && classes.successDefault,
        primary && classes.primary,
        secondary && classes.secondary,
        textTeritary && classes.textTeritary,
        baseWhite && classes.baseWhite,
        info && classes.info,
        textPrimitive && classes.textPrimitive,
        textWhite && classes.textWhite,
        xs && classes.xs,
        sm && classes.sm,
        md && classes.md,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        xl4 && classes.xl4,
        xl5 && classes.xl5,
        xl6 && classes.xl6,
        xl7 && classes.xl7,
        bold && classes.bold,
        font600 && classes.font600,
        semiBold && classes.semiBold,
        regular && classes.regular,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
