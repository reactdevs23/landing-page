import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Button, Input } from "components/common";
import Tabs from "components/Auth/Tabs/Tabs";
import PhoneNumberDropdown from "components/common/PhoneNumberDropdown/PhoneNumberDropdown";
import useOnClickOutSide from "hooks";
import { countries } from "common/constants";
import { handleKeyDown } from "../../../hooks";
import { Heading, Text } from "../../../components/common";
import classes from "./Login.module.css";
import { appleLogo, fbLogo, googleLogo, telegramLogo } from "../../../images";

const Login = () => {
  const [selectedTabState, setSelectedTabState] = useState("Email Address");
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectedPhoneValue, setSelectedPhoneValue] = useState(countries[0]);
  const dropdownRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [phone, setPhone] = useState("");

  const socials = [
    {
      logo: googleLogo,
      link: "#",
    },
    {
      logo: telegramLogo,
      link: "#",
    },
    {
      logo: fbLogo,
      link: "#",
    },
    {
      logo: appleLogo,
      link: "#",
    },
  ];

  useOnClickOutSide(dropdownRef, () => setIsDropdownActive(false));

  return (
    <section className={classes.auth}>
      <Heading xl3 font600 textCenter className={classes.heading}>
        Login to Brand Name
      </Heading>

      <form className={classes.form}>
        <Tabs
          onTabChange={(tabLabel) => setSelectedTabState(tabLabel)}
          activeTab={selectedTabState}
          items={["Email Address", "Phone Number"]}
        />
        {selectedTabState === "Phone Number" ? (
          <div className={classes.phoneNumber}>
            <div ref={dropdownRef}>
              <PhoneNumberDropdown
                isActive={isDropdownActive}
                selectedValue={selectedPhoneValue}
                onSelect={(val) => {
                  setSelectedPhoneValue(val);
                  setIsDropdownActive(false);
                }}
              >
                <div
                  className={classes.dropdownItem}
                  onClick={() => {
                    setIsDropdownActive((prev) => !prev);
                  }}
                >
                  <span className={classes.code}>
                    {selectedPhoneValue.code}
                  </span>
                  {isDropdownActive ? (
                    <FaAngleUp className={classes.arrow} />
                  ) : (
                    <FaAngleDown className={classes.arrow} />
                  )}
                </div>
              </PhoneNumberDropdown>
            </div>
            <Input
              className={classes.input}
              onKeyDown={handleKeyDown}
              type="number"
              placeholder="Phone number"
              value={phone}
              setValue={setPhone}
            />
          </div>
        ) : (
          <Input
            className={classes.input}
            type="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
        )}
        <Input
          className={classes.input}
          type="password"
          placeholder="password"
          value={password}
          setValue={SetPassword}
        />
        <div className={classes.buttonContainer}>
          <Button to="/login" btnPrimary>
            Login
          </Button>{" "}
          <Button to="/forgot-password" transparent>
            Forgot Password?
          </Button>{" "}
        </div>
        <Text sm textPlaceholer textCenter className={classes.or}>
          or
        </Text>
        <div className={classes.socialContainer}>
          {socials.map((el, i) => (
            <a
              href={el.link}
              key={i}
              target="_blank"
              rel="noreferrer"
              className={classes.social}
            >
              <img src={el.logo} alt="#" className={classes.logo} />
            </a>
          ))}
        </div>
      </form>
    </section>
  );
};

export default Login;
