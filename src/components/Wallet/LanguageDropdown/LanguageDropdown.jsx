import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { FiSearch } from "react-icons/fi";

import { FaCheck } from "react-icons/fa6";

import classes from "./LanguageDropdown.module.css";
import useOnClickOutside from "hooks";
import { deutsche, english, espanol, francais, turkce } from "images";
const listItems = [
  {
    flag: english,
    name: "English",
  },
  {
    flag: espanol,
    name: "Español",
  },
  {
    flag: deutsche,
    name: "Deutsche",
  },
  {
    flag: francais,
    name: "Français",
  },
  {
    flag: turkce,
    name: "Türkçe",
  },
];
const LanguageDropdown = ({
  isActive,
  setIsActive,
  selectedValue,
  onSelect,
  children,
  type2,
}) => {
  const [filteredItems, setFilteredItems] = useState(listItems);
  const inputRef = useRef();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, [isActive]);

  useEffect(() => {
    setFilteredItems(
      listItems?.filter((el) =>
        el.name?.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div
      className={clsx(classes.dropdown, type2 && classes.dropdown2)}
      ref={ref}
    >
      {children}
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={classes.searchContainer}>
          <FiSearch className={classes.searchIcon} />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className={classes.list}>
          {filteredItems?.map((el, idx) => {
            return (
              <div
                key={"lang-list-item-" + idx}
                className={clsx(
                  classes.listItem,
                  selectedValue === el.name && classes.active
                )}
                onClick={() => {
                  setSearchValue("");
                  onSelect(el.name);
                  setIsActive(false);
                }}
              >
                <img src={el.flag} alt="#" className={classes.flag} />
                <p className={classes.left}>{el.name}</p>

                {selectedValue === el.name && (
                  <FaCheck className={classes.checkmark} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
