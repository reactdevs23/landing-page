import React from "react";
import classes from "./Featured.module.css";
import { busnessIcon, forbes, techCrunch } from "images";
import { Heading, Text } from "components/common";
import { GoArrowRight } from "react-icons/go";
import clsx from "clsx";

const Featured = () => {
  const featured = [
    {
      logo: techCrunch,
      info: "Innovative crypto payment solutions transforming digital transactions.",
      link: "#",
    },
    {
      logo: forbes,
      info: "Leading the charge in next-generation payment gateways with cryptocurrency.",
      link: "#",
    },
    {
      logo: busnessIcon,
      info: "Exploring the impact of cutting-edge crypto payment systems on global commerce.",
      link: "#",
    },
  ];
  return (
    <section className={classes.wrapper}>
      {" "}
      <Heading xl4 regular textCenter>
        Featured and seen in
      </Heading>
      <div className={clsx(classes.container, "container")}>
        {featured.map((el, i) => (
          <a
            href={el.link}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={classes.featured}
          >
            <div className={classes.infoContainer}>
              <img src={el.logo} alt="#" className={classes.logo} />
              <Text base secondary>
                {el.info}
              </Text>
            </div>
            <button className={classes.button}>
              <GoArrowRight className={classes.arrow} />
            </button>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Featured;
