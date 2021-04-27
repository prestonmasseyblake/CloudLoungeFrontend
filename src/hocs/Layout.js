import React from 'react';
import Navbar from '../components/navbarFinal';

const layout = (props) => (
    <div>
        <Navbar />
            {props.children}
        
    </div>
);
export default layout;