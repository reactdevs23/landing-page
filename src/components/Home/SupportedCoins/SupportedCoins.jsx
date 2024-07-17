import React from "react";
import classes from "./SupportedCoins.module.css";
import clsx from "clsx";
import { Heading, Text } from "components/common";
import { coins } from "images";

const SupportedCoins = () => {
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={classes.infoContainer}>
        <Heading xl6>Supported coins and blockchain</Heading>
        <Text secondary xl2>
          More than 50+ coins and blockchain supported in brand_name
        </Text>
      </div>
      <img src={coins} alt="#" className={classes.img} />
    </section>
  );
};

export default SupportedCoins;
