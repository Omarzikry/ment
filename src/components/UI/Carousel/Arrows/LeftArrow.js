import React from 'react';



const LeftArrow = (props) => {

  return (

    <div className="backArrow" onClick={props.click} style={{position: 'absolute',left: '1em' , top: '50%'}}>

      <i className="fas fa-arrow-circle-left"></i>

    </div>

  );

}

export default LeftArrow;