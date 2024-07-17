import React from "react";
import classes from "./Header.module.css";
import { Heading, Text } from "../../common";
const Header = ({ heading, info }) => {
  return (
    <div className={classes.header}>
      <Heading xl3 textCenter>
        {heading}
      </Heading>
      {info && (
        <Text secondary textCenter lg className={classes.info}>
          {info}
        </Text>
      )}
    </div>
  );
};

export default Header;
