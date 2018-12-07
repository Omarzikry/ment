import React from 'react';
//import  './Slide.css';
//import modelImg from '../../../../assets/images/slide3.jpg'

const slide = {
    width: '100%',
    height: '100%',
    flexShrink: '0'
}
const slideImg = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    flexShrink: '0'
}


const Slide = (props) => {

  return <div className="slide" style={{...slide}}><img style={slideImg} src={props.src} alt={props.alt} /></div>

}



export default Slide