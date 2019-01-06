import React from "react";
import classes from "./Intro.css";
import shareImg from "../../../../assets/images/share.png";
const Intro = props => {
  return (
    <div className={classes.Intro}>
      <div className={classes.text}>
        <h1>{props.title}</h1>
        <h2>featured news</h2>
        <p className={classes.introParagraph}>{props.intro}</p>
      </div>
      <div className={classes.status}>
        <div className={classes.text}>
          <h3>{props.author}</h3>
          <p className={classes.date}>{props.date}</p>
        </div>
        <div className={classes.btns}>
          <img src={props.authorImage} className={classes.profileImg} alt="" />
          <button className={classes.circleBtn}>
            <img src={shareImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
