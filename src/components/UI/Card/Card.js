import React from 'react';
import classes from './Card.css';
import arrowImg from '../../../assets/images/Arrow-UP-Right.png';
const Card = (props) => {
    return (
        <div className={[classes.card , props.active ? classes.active : null].join(' ')} onClick={props.click} id={props.id}>
            <img src={props.productImage} alt={props.productImageAlt} className={classes.productImage} />
            <div className={classes.overlay}>
                <span className={classes.circle}><img src={arrowImg} alt="" /></span>
                <div className={classes.text}>
                    <h3>{props.name}</h3>
                    <p>{props.brand}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
