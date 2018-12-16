import React from 'react';
import classes from './CartBtn.css';
const CartBtn = (props) => {
    return (
        <button onClick={props.click} className={classes.btn}>{props.children}</button>
    );
}

export default CartBtn;
