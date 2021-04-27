import React from 'react';
import leftArrow from './left-arrow.svg';

const styleSlide =  {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "0px",
    height: "50px",
    width: "50px",
    background: "white",
    cursor: "pointer",
    alignItems: "center"
}
const Arrow = () => {
    return (
        <div style={styleSlide}>
            <img src={leftArrow} alt="arrow"/>
        </div>
    )
}
export default Arrow
