import React from 'react';
import classes from './Button.css';
const Button = (props) => {
    return (
        <button className={[classes.Button ,classes[props.btnType]].join(' ')} onClick={props.click}><div className={classes.contentWrapper}><span className={classes.text}>{props.children}</span><span className={classes.iconBox}><img src={props.iconSrc} alt="" /></span></div></button>
    );
}

export default Button;
