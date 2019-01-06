import React from "react";
import classes from "./MidSection.css";

const MidSection = props => {
  const { content } = props;
  return (
    <div
      className={classes.text}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MidSection;
