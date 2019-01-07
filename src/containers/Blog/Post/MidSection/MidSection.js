import React from "react";
import classes from "./MidSection.css";

const MidSection = props => {
  const { content } = props;
  return (
    <div className={classes.midSection}>
      {props.quoteData ? (
        <div className={classes.quoteContainer}>
          <div className={classes.status}>
            <div className={classes.statusDescribtion}>
              <h2>{props.quoteData.quoteAuthorName}</h2>
              <p>{props.quoteData.quoteAuthorPosition}</p>
            </div>
            <img
              src={props.quoteData.quoteAuthorImage}
              alt={props.quoteContent}
            />
          </div>
          <p className={classes.quoteContent}>
            “{props.quoteData.quoteContent}”
          </p>
        </div>
      ) : null}
      <div
        className={classes.text}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default MidSection;
