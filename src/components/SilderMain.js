import React, {useState, useRef} from 'react'
import Arrow from './Arrow';
import RightArrow from './Right-Arrow';
import SliderContainer from "./SliderContainer";
import Slide from "./Slider";
const constStyles = {
    position: "relative",
    height: "100vh",
    width: "100vw",
    margin: "0 auto",
    overflow: "hidden",
    whiteSpace: "nowrap"
}
const getWidth = () => window.innerWidth
const SliderMain = () => {
const [ slides ] = [ 1,2 ]
const firstSlide = slides[0]
const secondSlide = slides[1]
const lastSlide = slides[1]
const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
})
const prevSlide = () => {
    console.log('prev');
    setState({
        ...state,
        translate: 0,
        activeSlide: state.activeSlide === 0 ? slides.length - 1 : state.activeSlide - 1
      })
      
}
const nextSlide = () => {
    console.log('next');
    setState({
        ...state,
        translate: state.translate + getWidth(),
        activeSlide: state.activeSlide === 0 ? slides.length - 1 : state.activeSlide + 1
      })
      console.log('next');
}
    return (
        <div style={constStyles}>
            <SliderContainer>
           
            <Slide/>
            <Arrow onClick={prevSlide}/>      
            <RightArrow onClick={nextSlide}/> 
            </SliderContainer>
        </div>
    )
}

export default SliderMain;
