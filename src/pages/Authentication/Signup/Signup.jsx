import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Button, Input } from "components/common";
import Tabs from "components/Auth/Tabs/Tabs";
import PhoneNumberDropdown from "components/common/PhoneNumberDropdown/PhoneNumberDropdown";
import useOnClickOutSide from "hooks";
import { countries } from "common/constants";
import { handleKeyDown } from "../../../hooks";
import { Heading, Text } from "../../../components/common";
import classes from "./Signup.module.css";
import { appleLogo, fbLogo, googleLogo, telegramLogo } from "../../../images";

import SetPassword from "../SetPassword/SetPassword";
import Verification from "../Verification/Verification";

const Signup = () => {
  const [selectedTabState, setSelectedTabState] = useState("Email Address");
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectedPhoneValue, setSelectedPhoneValue] = useState(countries[0]);
  const dropdownRef = useRef(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //for routing purpose state

  const [step, setStep] = useState(1);
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
  // const createAccountHandler = () => {
  //   if (selectedTabState === "Email Address") {
  //     navigate("/email-verification");
  //   }
  //   if (selectedTabState === "Phone Number") {
  //     navigate("/phone-verification");
  //   }
  // };

  useOnClickOutSide(dropdownRef, () => setIsDropdownActive(false));

  return (
    <>
      {step === 1 && (
        <section className={classes.auth}>
          <Heading xl3 font600 textCenter className={classes.heading}>
            Start your journey
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
            <Text base primary className={classes.info}>
              By signing-up you are agree with all{" "}
              <a
                href="/#"
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                Terms & Condition
              </a>{" "}
              and{" "}
              <a
                href="/#"
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                Privacy Policy.
              </a>
            </Text>
            <Button
              btnPrimary
              wFull
              onClick={() => setStep((prev) => prev + 1)}
            >
              Create an Account
            </Button>{" "}
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
      )}

      {step === 2 && (
        <Verification
          setStep={setStep}
          heading={
            selectedTabState === "Email Address"
              ? "Verify Your Email"
              : selectedTabState === "Phone Number"
              ? "Verify Your Phone"
              : ""
          }
          info={
            selectedTabState === "Email Address"
              ? "We send 6 digit verification code to your email. Please check your email."
              : selectedTabState === "Phone Number"
              ? "We send 6 digit verification code to your phone. Please check your inbox."
              : ""
          }
        />
      )}

      {step === 3 && (
        <SetPassword
          info={
            selectedTabState === "Email Address"
              ? "Your email is verified. Enter a password to make your account secure."
              : selectedTabState === "Phone Number"
              ? "Your phone is verified. Enter a password to make your account secure."
              : ""
          }
        />
      )}
    </>
  );
};

export default Signup;
