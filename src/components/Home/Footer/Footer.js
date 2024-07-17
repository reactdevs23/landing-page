import React from "react";

import { FaAngleRight } from "react-icons/fa";

import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import { logo } from "../../../images";
import { Button, Heading, Text } from "../../../components/common";
import clsx from "clsx";

const Footer = () => {
  return (
    <div className={clsx(classes.footer, "container")}>
      <footer className={classes.wrapper}>
        <div
          className={clsx(classes.itemContainer, classes.brandNameContainer)}
        >
          <Heading primary lg className={classes.heading}>
            Brand Name
          </Heading>
          <Link to="/" className={classes.item}>
            Home
          </Link>
          <Link to="/pricing" className={classes.item}>
            Pricing
          </Link>
          <Link to="/news-and-blog" className={classes.item}>
            News & Blog
          </Link>
          <Link to="/faq" className={classes.item}>
            FAQ
          </Link>{" "}
          <Link to="/contact" className={classes.item}>
            Contact
          </Link>
        </div>{" "}
        <div className={clsx(classes.itemContainer, classes.solutionContainer)}>
          <Heading primary lg className={classes.heading}>
            Solutions
          </Heading>

          <Link to="/personal-wallet" className={classes.item}>
            Personal Wallet
          </Link>
          <Link to="/business-wallet" className={classes.item}>
            Business Wallet
          </Link>
          <Link to="/api-integration" className={classes.item}>
            API Integration
          </Link>
          <Link to="/checkout" className={classes.item}>
            Checkout Widget
          </Link>
        </div>{" "}
        <div className={clsx(classes.itemContainer, classes.useCasesContainer)}>
          <Heading primary lg className={classes.heading}>
            Use Cases
          </Heading>

          <Link to="/payment-gateway" className={classes.item}>
            Payment Gateway
          </Link>
          <Link to="/personal-use" className={classes.item}>
            Personal Use
          </Link>
          <Link to="/business-purpose" className={classes.item}>
            Business Purpose
          </Link>
          <Link to="/converter" className={classes.item}>
            Converter
          </Link>
        </div>{" "}
        <div className={clsx(classes.itemContainer, classes.supportContainer)}>
          <Heading primary lg className={classes.heading}>
            Community & Support
          </Heading>
          <div className={classes.emailContainer}>
            <Text sm textTeritary>
              Email
            </Text>
            <a
              href="mailto:support@platform.com"
              target="_blank"
              rel="noreferrer"
              className={classes.item}
            >
              support@platform.com
            </a>
          </div>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.item}
          >
            Telegram
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.item}
          >
            Discord
          </a>{" "}
        </div>
      </footer>
      <div className={classes.copyRightContainer}>
        <Text secondary base className={classes.reserved}>
          <img src={logo} alt="#" className={classes.logo} />
          © 2024 Brandname. All rights reserved.
        </Text>
        <div className={classes.privacyPolicyAndTermsAndCondition}>
          <Link to="" className={classes.link}>
            Privacy Policy
          </Link>
          <Link to="" target="_blank" className={classes.link}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
