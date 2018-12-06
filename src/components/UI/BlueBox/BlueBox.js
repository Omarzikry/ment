import React from 'react';
import classes from './BlueBox.css';
const BlueBox = (props) => {
    var style = {
        height: props.height,
        width: props.width,
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom
    }
    return (
        <div className={classes.BlueBox} style={style}>
            
        </div>
    );
}

export default BlueBox;
