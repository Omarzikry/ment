import React from 'react';
import classes from './NavsLink.css';
const NavsLink = (props) => {
    return (
        <button id={props.id} onClick={props.click} className={[classes.NavBtn , props.active ? classes.active : null].join(' ')}>{props.children}</button>
    );
}

export default NavsLink;
