import React, { Fragment } from 'react';
import classes from './Card.css';
import arrowImg from '../../../assets/images/Arrow-UP-Right.png';
import MovingColors from '../MovingColors/MovingColors';
import arrowBtn from '../../../assets/images/Arrow-Right.png'
import CartBtn from '../CartBtn/CartBtn';
const Card = (props) => {

    let card = <div className={[classes.card, props.active ? classes.active : null].join(' ')} onClick={props.click} id={props.id}>
        <img src={props.productImage} alt={props.productImageAlt} className={classes.productImage} />
        <div className={classes.overlay}>
            <span className={classes.circle}><img src={arrowImg} alt="" /></span>
            <div className={classes.text}>
                <h3>{props.name}</h3>
                <p>{props.brand}</p>
            </div>
        </div>
    </div>;

    if (props.opened) {

        // ========== unload scroll bars on opening ========== //
        const unloadScrollBars = () => {
            document.documentElement.style.overflow = 'hidden';  // firefox, chrome
            document.body.scroll = "no"; // ie only
        };
        unloadScrollBars();

        // ========== load images ========== //
        let images = [];
        for(let myImage in props.fullImages){
            images.push(props.fullImages[myImage]);
        };
        console.log(images);
        const renderImages = images.map((image , index) => {
            return <img src={image} alt="" key={index}/>
        })
        card = <div className={[classes.fullCard, props.active ? classes.active : null].join(' ')} onClick={props.click} id={props.id}>
                <MovingColors color="white"/>
                <MovingColors color="black"/>
                <div className={classes.imgContainer}>
                {renderImages}
                </div>
                <div className={classes.productDetails}>
                <div className={classes.text}>
                <h2>{props.name}</h2>
                <h3>$ {props.price}</h3>
                <h4>{props.color}</h4>
                <p>{props.description}</p>
                </div>
                <div className={classes.btn} onClick={(e) => {e.stopPropagation();props.cancelClicked()}}>back <span><img src={arrowBtn} alt="" /></span></div>
                <CartBtn>add to cart</CartBtn>
                </div>
        </div>;
    }
    return (
        <Fragment>
            {card}
        </Fragment>
    );
}

export default Card;
