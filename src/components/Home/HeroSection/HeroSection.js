import React from "react";
import classes from "./HeroSection.module.css";
import clsx from "clsx";

import { Text, Heading, Button } from "../../common";

import Tabs from "../../Auth/Tabs/Tabs";

const HeroSection = () => {
  return (
    <section className={clsx(classes.wrapper)} id="home">
      <div className={clsx("container", classes.container)}>
        <div className={classes.infoContainer}>
          {" "}
          <Text primaryDefault lg textCenter semiBold>
            Unlocking new era of crypto payment system.
          </Text>
          <Heading xl6 textCenter bold className={classes.heading}>
            Streamline Transactions with Our Crypto Payment Gateway Solutions
          </Heading>
        </div>{" "}
        <div className={classes.buttonContainer}>
          <Button to="/sign-up" primitive100>
            Get Started
          </Button>
          <Button to="/contact-us" primitive900>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
