import React from 'react';
import classes from './ExploreBtn.css';
const ExploreBtn = (props) => {
    return (
        <button className={classes.btn} onClick={props.click}>{props.children}</button>
    );
}

export default ExploreBtn;
