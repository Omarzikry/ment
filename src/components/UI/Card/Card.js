import React, { Fragment } from 'react';
import classes from './Card.css';
import arrowImg from '../../../assets/images/Arrow-UP-Right.png';
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
                <div className={classes.imgContainer}>
                {renderImages}
                <div className={classes.btn} onClick={(e) => {e.stopPropagation();props.cancelClicked()}}>cancel</div>
                </div>
                <div className={classes.productDetails}>
                <h1>hello</h1>
                <button>helo</button>
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
