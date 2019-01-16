import React from "react";
import classes from "./ToggleBtn.css";
import burgerIcon from "../../../assets/images/menu-icon.png";
const ToggleBtn = props => {
  return (
    <div
      className={[classes.ToggleBtn, props.extraStyles].join(" ")}
      onClick={props.click}
    >
      <img src={burgerIcon} alt="" />
    </div>
  );
};

export default ToggleBtn;
