import React, {memo} from 'react';
import '../bootstrap.css';
import "./Slider.css";
import img from './img.JPG';



 
const Slider = ({image}) => {
    
const styleSlide =  {
    backgroundImage: `url(${img})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden"
}
return (
<div className="slider" style={styleSlide}>
    <div className="container full-height w-100 h-100">
        <div className="row align-items-center h-100">
            <div className="col-12">
            <h1 className="text-center">Work</h1>
            <h3 className="text-center">There are 5 people chilling in this lounge</h3>
            <div className="w-100 text-center">
            <button className="btn btn-success">Enter</button>
            </div>
            </div>
        </div>
    </div>
</div>
)}
export default Slider;