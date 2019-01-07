import React from "react";
import arrow from "../../../assets/images/arrowRightBlack.png";
import classes from "./ReadMoreButton.css";
const ReadMoreButton = props => {
  return (
    <button
      className={classes.readMoreButton}
      style={{
        right: props.right,
        left: props.left,
        top: props.top,
        bottom: props.bottom
      }}
      onClick={props.click}
    >
      <p>Read More</p>
      <div className={classes.imgContainer}>
        <img src={arrow} alt="" />
      </div>
    </button>
  );
};

export default ReadMoreButton;
