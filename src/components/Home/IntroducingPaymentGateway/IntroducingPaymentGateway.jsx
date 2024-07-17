import React from "react";
import classes from "./IntroducingPaymentGateway.module.css";
import { introducing } from "images";
import SectionHeading from "components/common/SectionHeading/SectionHeading";
import { Heading, Text } from "components/common";
import clsx from "clsx";

const IntroducingPaymentGateway = () => {
  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <SectionHeading>Introducing</SectionHeading>
          <Heading xl6 semiBold className={classes.heading}>
            A new era of crypto payment gateway.
          </Heading>
        </div>
        <img
          src={introducing}
          alt="A new era of crypto payment gateway."
          className={classes.img}
        />
      </div>

      <div className={classes.wellComeContainer}>
        <Text textPrimary xl4 semiBold>
          Welcome to our revolutionary Crypto Payment Gateway, leading the
          forefront of digital commerce.{" "}
          <span className={classes.info}>
            Embrace seamless transactions and enhanced security as we redefine
            financial innovation. Our platform empowers businesses and consumers
            to transact effortlessly with cryptocurrencies, leveraging
            blockchain technology to transform payment methods globally.
          </span>
        </Text>
      </div>
    </section>
  );
};

export default IntroducingPaymentGateway;
