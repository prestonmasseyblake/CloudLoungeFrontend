import React from 'react'
import './Nav.css';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
const Nav = ({name}) => {
    return (
        <div className='nav'>
            <div className='nav-container'>
                <div>
                    <ArrowIcon/>
                </div>
                <div>
                <h3 className='textcenter'>{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Nav;
