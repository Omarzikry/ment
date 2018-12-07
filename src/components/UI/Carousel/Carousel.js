import React, { Component } from 'react';
import classes from "./Carousel.css";
import Slide from './Slide/Slide';
//import LeftArrow from './Arrows/LeftArrow';
//import RightArrow from './Arrows/RightArrow';
import axios from '../../../axiosCarouselImages';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import playImg from '../../../assets/images/play.png'
class Carousel extends Component {

    state = {
        images: [],
        currentIndex: 0,
        translateValue: 0,
        loading: true,
    }


    // ============ GET THE DATA AFTER COMPONENT IS MOUNTED ============ //

    componentDidMount() {
        axios.get('/images.json')
            .then(response => {
                const images = Object.entries(response.data)
                this.setState({ images: images, loading: false })
            })
    }

    // ============ PREVIOUS SLIDE ============ //

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {

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

    // ============ NEXT SLIDE ============ //

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {

            return this.setState({

                currentIndex: 0,

                translateValue: 0

            })
        }
        else {
            this.setState(prevState => ({

                currentIndex: prevState.currentIndex + 1,

                translateValue: prevState.translateValue + -(this.slideWidth())

            }));
        }
    }



    // ============ GET SLIDE WIDTH ============ //

    slideWidth = () => {

        return document.querySelector('.slide').clientWidth

    }



    //============ AUTOPLAY ============ //

    autoplay = () => {
            setInterval(() => {
                this.goToNextSlide()
            }, 1000)
    }

    render() {
        let images = <Spinner />
        if (this.state.loading !== true) {
            images = this.state.images.map(image => {
                return <Slide src={image[1].url} alt={image[1].alt} key={image[0]} />
            })
        }
        return (
            <div className={classes.carouselContainer}>
                <div className={classes.text}>
                <h2>Maia <br /> Anderson</h2>
                <h3>British Model</h3>
                </div>
                <div className={classes.slider}>
                <div className="slider-wrapper" style={{ transform: `translateX(${this.state.translateValue}px)`, transition: 'transform ease-out 0.45s', display: 'flex', width: '100%', height: '100%', position: 'relative' }}>
                    {images}
                </div>
                {/* <LeftArrow click={this.goToPrevSlide} />
                <RightArrow click={this.goToNextSlide} /> */}
            </div>
            <Button btnType="outFrame" iconSrc={playImg}>VIEW PROFILE</Button>
            </div>
        );
    }
}

export default Carousel;
