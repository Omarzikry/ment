import React from "react";
import classes from "./TrendingLabel.css";

const TrendingLabel = props => {
  return (
    <div
      className={classes.trendingLabel}
      style={{
        right: props.right,
        left: props.left,
        top: props.top,
        bottom: props.bottom
      }}
    >
      Trending
    </div>
  );
};

export default TrendingLabel;
