import React, { useState } from "react";
import classes from "./ValuableFeatures.module.css";
import { walletImg } from "images";
import SectionHeading from "components/common/SectionHeading/SectionHeading";
import { Heading, Text } from "components/common";
import { FaCircleCheck } from "react-icons/fa6";

import clsx from "clsx";

const ValuableFeatures = () => {
  const [showFeature, setShowFeature] = useState(1);
  const features = [
    {
      title: "Personal Wallet",
      info: "Innovative crypto payment solutions transforming digital transactions.",
    },
    {
      title: "Business Wallet",
      info: "Innovative crypto payment solutions transforming digital transactions.",
    },
    {
      title: "API Integration",
      info: "Innovative crypto payment solutions transforming digital transactions.",
    },
    {
      title: "Checkout Widgets",
      info: "Innovative crypto payment solutions transforming digital transactions.",
    },
  ];

  const facilities = [
    {
      title: "Efficiency and Speed",
      info: "Instantaneous transactions without the delays of traditional banking systems, ensuring swift processing and settlement.",
    },

    {
      title: "Enhanced Security",
      info: "Leveraging advanced cryptographic techniques to safeguard transactions and protect sensitive information, ensuring peace of mind for both merchants and customers.",
    },
    {
      title: "Flexibility and Integration",
      info: "Easily integrate our gateway into your payment infrastructure, offering customers the choice to pay with cryptocurrencies alongside traditional methods.",
    },
    {
      title: "Global Accessibility",
      info: "Reach customers worldwide without the limitations of borders or currency exchange rates, facilitating seamless international transactions.",
    },
  ];
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <SectionHeading>Valuable Features</SectionHeading>
          <Heading xl6 semiBold className={classes.heading}>
            Integrating our crypto payment gateway is now easier than ever
          </Heading>
        </div>
        <div className={classes.featuresContainer}>
          <div className={classes.features}>
            {features.map((feature, i) => (
              <div
                key={i}
                className={clsx(
                  classes.feature,
                  showFeature === i + 1 && classes.active
                )}
                onClick={() => setShowFeature(i + 1)}
              >
                <Heading lg>{feature.title}</Heading>
                {showFeature === i + 1 && (
                  <Text base secondary>
                    {feature.info}
                  </Text>
                )}
              </div>
            ))}
          </div>
          <img
            src={walletImg}
            alt="Integrating our crypto payment gateway is now easier than ever"
            className={classes.img}
          />
        </div>
      </div>{" "}
      <div className={classes.facilities}>
        {facilities.map((facility, i) => (
          <div className={classes.facility} key={i}>
            <FaCircleCheck className={classes.checkmark} />
            <div className={classes.infoContainer}>
              <Heading xl2>{facility.title}</Heading>
              <Text secondary lg>
                {facility.info}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuableFeatures;
