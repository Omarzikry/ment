import React, { Component } from 'react';
import classes from "./Carousel.css";
import Slide from './Slide/Slide';
//import LeftArrow from './Arrows/LeftArrow';
//import RightArrow from './Arrows/RightArrow';
import axios from '../../../axiosCarouselImages';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import playImg from '../../../assets/images/play.png'
import ActiveDots from './ActiveDots/ActiveDots';
class Carousel extends Component {

    state = {
        images: [],
        currentIndex: 0,
        translateValue: 0,
        loading: true,
        imagesLoaded: true,
    }


    // ============ GET THE DATA AFTER COMPONENT IS MOUNTED ============ //

    componentDidMount() {
        axios.get('/images.json')
            .then(response => {
                const images = Object.entries(response.data)
                this.setState({ images: images, loading: false })
                if(this.props.auto){
                    this.autoplay();
                }
            })
    }
    componentWillUnmount(){
        clearInterval(this.timer);
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

    translateValue = (currentIndex) => {
        const translateValue = currentIndex * -(this.slideWidth())
        this.setState({translateValue: translateValue})
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

                //translateValue: prevState.translateValue + -(this.slideWidth())

            }));
        }
        this.translateValue(this.state.currentIndex)
    }



    // ============ GET SLIDE WIDTH ============ //

    slideWidth = () => {

        return document.querySelector('.slide').clientWidth

    }



    //============ AUTOPLAY ============ //

    autoplay = () => {
           this.timer = setInterval(() => {
                this.goToNextSlide()
            }, 3000)
    }

    // ====== callback function to recieve the current index ====== //
    recieveIndex = (indexfromChild) => {
        this.setState({currentIndex: indexfromChild});
        this.translateValue(indexfromChild)
    }

    render() {
        // ========= render images ===========//
        let images = <Spinner />
        if (this.state.loading !== true) {
            images = this.state.images.map(image => {
                return <Slide src={image[1].url} alt={image[1].alt} key={image[0]} />
            })
        }
        // ========= render text ===========//
        let text = null;
        if(this.state.loading !== true){
            text = this.state.images.map(image => {
                return(
                <div className={classes.text} key={image}>
                <h2>{image[1].firstName}<br />{image[1].lastName}</h2>
                <h3>{image[1].job}</h3>
                </div>
                );
            })
        }
        return (
            <div className={classes.carouselContainer}>
                <ActiveDots currentIndex={this.state.currentIndex} imagesNumber={this.state.images.length} loading={!this.state.loading} callIndex={this.recieveIndex}/>
                {text}
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
