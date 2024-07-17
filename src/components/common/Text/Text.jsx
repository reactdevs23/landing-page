import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";
const Text = ({
  children,
  xs,
  sm,
  base,
  textPlaceholer,
  textTeritary,
  textPrimitive,
  textWhite,
  md,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  primaryDefault,
  successDefault,
  headingColor,
  baseWhite,
  primary,
  secondary,
  semiBold,
  bold,
  font600,
  textCenter,
  textRight,
  className,
  onClick,
}) => {
  return (
    <p
      onClick={onClick && onClick}
      className={clsx(
        classes.text,
        primaryDefault && classes.primaryDefault,
        successDefault && classes.successDefault,
        headingColor && classes.headingColor,
        baseWhite && classes.baseWhite,
        primary && classes.primary,
        secondary && classes.secondary,
        textPlaceholer && classes.textPlaceholer,
        textTeritary && classes.textTeritary,
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
        bold && classes.bold,
        font600 && classes.font600,
        semiBold && classes.semiBold,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
