import React from 'react';
import classes from './MovingColors.css';
const MovingColors = (props) => {
    return (
        <div className={[classes.MovingColors , classes[props.color]].join(' ')}>
            
        </div>
    );
}

export default MovingColors;
