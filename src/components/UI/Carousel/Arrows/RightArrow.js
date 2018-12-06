import React from 'react';



const RightArrow = (props) => {

  return (

    <div className="nextArrow" onClick={props.click} style={{position: 'absolute',right: '1em' , top: '50%'}}>

      <i className="fas fa-arrow-circle-right"></i>
    </div>

  );

}



export default RightArrow;