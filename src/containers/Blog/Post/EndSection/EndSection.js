import React from "react";
import classes from "./EndSection.css";

const EndSection = props => {
  return (
    <div className={classes.endSection}>
      <h3>{props.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export default EndSection;
