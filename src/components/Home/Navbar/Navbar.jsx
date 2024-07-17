import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";

import { Link } from "react-router-dom";

import Tabs from "../../Auth/Tabs/Tabs";
import { lanugageIcon, mainLogo } from "images";
import Dropdown from "./Dropdown/Dropdown";
import clsx from "clsx";
import LanguageDropdown from "components/Wallet/LanguageDropdown/LanguageDropdown";

const Navbar = () => {
  const dropDownRef = useRef(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownRoutes = [
    { navItem: "Solution1", to: "/solution1" },
    { navItem: "Solution2", to: "/solution2" },
    { navItem: "Solution3", to: "/solution3" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //language dropdown
  const [showLanguageropdown, setShowLanguageropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <Link
          className={[classes.navItem, classes.logoContainer].join(" ")}
          to="/"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={mainLogo} alt="#" className={classes.logo} />
        </Link>

        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          <Dropdown
            label="Service"
            isActive={isDropdownActive}
            setIsActive={setIsDropdownActive}
            onSelect={(val) => {
              setIsDropdownActive(false);
            }}
            dropdownItems={dropdownRoutes}
            dropdownRef={dropDownRef}
          >
            Solution
          </Dropdown>
          <Link
            className={classes.navItem}
            to="/pricing"
            onClick={() => setSidebar((prev) => !prev)}
          >
            Pricing
          </Link>
          <Link
            className={classes.navItem}
            to="/blog"
            onClick={() => setSidebar((prev) => !prev)}
          >
            Blog
          </Link>{" "}
          <Link
            className={classes.navItem}
            to="/api-doc"
            onClick={() => setSidebar((prev) => !prev)}
          >
            API Doc
          </Link>{" "}
          <Link
            className={classes.navItem}
            to="/contact"
            onClick={() => setSidebar((prev) => !prev)}
          >
            Contact
          </Link>{" "}
          <Tabs
            className={classes.mobileTabs}
            type2
            items={[
              { item: "Login", to: "/login" },
              { item: "Sign-up", to: "/sign-up" },
            ]}
          />
        </div>
        <div className={classes.buttonContainer}>
          <LanguageDropdown
            isActive={showLanguageropdown}
            selectedValue={selectedLanguage}
            setIsActive={setShowLanguageropdown}
            onSelect={(val) => setSelectedLanguage(val)}
            type2
          >
            <div
              className={clsx(
                showLanguageropdown && classes.activeIconContainer,
                classes.iconContainer
              )}
              onClick={() => setShowLanguageropdown((prev) => !prev)}
            >
              <img
                src={lanugageIcon}
                alt="#"
                className={classes.languageIcon}
              />
            </div>
          </LanguageDropdown>{" "}
          <Tabs
            className={classes.tabs}
            type2
            items={[
              { item: "Login", to: "/login" },
              { item: "Sign-up", to: "/sign-up" },
            ]}
          />
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
