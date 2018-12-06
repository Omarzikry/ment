import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navlink.css';
const Navlink = (props) => {
    return (
        <NavLink className={classes.Navlink} to={props.goTo}>{props.children}</NavLink>
    );
}

export default Navlink;
