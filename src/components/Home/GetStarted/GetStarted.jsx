import React from "react";
import classes from "./GetStarted.module.css";
import clsx from "clsx";

import { Button, Heading, Text } from "../../common";
import { leftTop, rightBottom } from "../../../images";

const GetStarted = () => {
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <img src={leftTop} alt="#" className={classes.leftTop} />
        <div className={classes.infoContainer}>
          <Heading xl6 textCenter className={classes.heading}>
            Get Started with Your Gateway API Today!
          </Heading>
          <Text secondary xl2 textCenter>
            Start integrating seamlessly with our Gateway API. Sign up, and
            generate API keys for secure transactions — all in one streamlined
            process.
          </Text>
          <div className={classes.buttonContainer}>
            <Button to="/sign-up" primitive100>
              Get Started
            </Button>
            <Button to="/contact-us" primitive950>
              Contact Us
            </Button>
          </div>
        </div>
        <img src={rightBottom} alt="#" className={classes.rightBottom} />
      </div>
    </section>
  );
};

export default GetStarted;
