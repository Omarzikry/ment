import React from 'react';
import classes from './Intro.css';
import shareImg from '../../../../assets/images/share.png'
const Intro = (props) => {
    return (
        <div className={classes.Intro}>
            <div className={classes.text}>
                <h1>{props.title}</h1>
                <h2>featured news</h2>
                <p className={classes.introParagraph}>{props.intro}</p>
            </div>
            <div className={classes.status}>
                <div className={classes.text}>
                    <h3>{props.author}</h3>
                    <p className={classes.date}>{props.date}</p>
                </div>
                <div className={classes.btns}>
                <img src="https://firebasestorage.googleapis.com/v0/b/ment-d7ce6.appspot.com/o/author.jpg?alt=media&token=29b6407e-66ca-4b06-ac1f-8637fd5ca582" className={classes.profileImg} alt="" />
                <button className={classes.circleBtn}><img src={shareImg} alt="" /></button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
