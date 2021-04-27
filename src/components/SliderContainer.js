import React from 'react';


const SliderContainer = ({translate, transition,width, children}) => {

const mainStyle = {
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    height: "100%",
    width: `${width}px`,
    display: 'flex'
}

return (
    <div style={mainStyle}>
        {children}
    </div>
)    
}
export default SliderContainer;