import React, { Component } from 'react';
import classes from "./Carousel.css";
import Slide from './Slide/Slide';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
class Carousel extends Component {

    state = {
        images: [
            'https://firebasestorage.googleapis.com/v0/b/ment-d7ce6.appspot.com/o/slide3.jpg?alt=media&token=8ba176ee-115a-4870-b669-3a77640968c3',
            'https://firebasestorage.googleapis.com/v0/b/ment-d7ce6.appspot.com/o/model27.jpg?alt=media&token=93839b78-8cec-44f2-b507-87cc57eade99',
            'https://firebasestorage.googleapis.com/v0/b/ment-d7ce6.appspot.com/o/slide3.jpg?alt=media&token=8ba176ee-115a-4870-b669-3a77640968c3',
            'https://firebasestorage.googleapis.com/v0/b/ment-d7ce6.appspot.com/o/model27.jpg?alt=media&token=93839b78-8cec-44f2-b507-87cc57eade99',
        ],
        currentIndex: 0,
        translateValue: 0
    }


    goToPrevSlide = () => {
        if(this.state.currentIndex === 0) {

            return this.setState({
      
              currentIndex: 0,
      
              translateValue: 0
      
        })
    }
    this.setState(prevState => ({

        currentIndex: prevState.currentIndex - 1,
  
        translateValue: prevState.translateValue + +(this.slideWidth())
  
    }));


    }



    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {

            return this.setState({
      
              currentIndex: 0,
      
              translateValue: 0
      
        })
    }
    this.setState(prevState => ({

        currentIndex: prevState.currentIndex + 1,
  
        translateValue: prevState.translateValue + -(this.slideWidth())
  
    }));
}
slideWidth = () => {

    return document.querySelector('.slide').clientWidth

 }
    render() {
        return (
            <div className={classes.slider}>

                <div className="slider-wrapper" style={{transform: `translateX(${this.state.translateValue}px)`,transition: 'transform ease-out 0.45s',display: 'flex',width:'100%',height:'100%',position: 'relative'}}>

                    {this.state.images.map((image, i) => (
                        <Slide key={i} src={image} />
                    ))}

                </div>
                <LeftArrow click={this.goToPrevSlide} />
                <RightArrow click={this.goToNextSlide} />
            </div>
        );
    }
}

export default Carousel;
