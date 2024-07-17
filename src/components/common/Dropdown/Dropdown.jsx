import { useEffect, useRef } from "react";
import clsx from "clsx";

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import classes from "./Dropdown.module.css";

import useOnClickOutside from "../../../hooks";
import { Text } from "..";

const Dropdown = ({
  children,
  isActive,
  items,
  selectedValue,
  onSelect,
  setIsActive,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown, classes.noTheme)} ref={ref}>
      <div
        className={classes.labelContainer}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text textTeritary base>
          {children}
        </Text>
        {isActive ? (
          <FaChevronUp className={classes.arrow} />
        ) : (
          <FaChevronDown className={classes.arrow} />
        )}
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          {items?.map((item, idx) => {
            return (
              <div key={idx}>
                <Text
                  key={"id-" + idx}
                  className={clsx(
                    classes.listItem,
                    selectedValue === item && classes.active
                  )}
                  onClick={() => {
                    onSelect(item);
                    setIsActive(false);
                  }}
                >
                  {item}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
