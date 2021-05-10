import React from 'react'
import './Nav.css';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import {Link} from 'react-router-dom';
const Nav = ({name, slug}) => {
    return (
        <div className='nav'>
            <div className='nav-container'>
                <div>
                    <ArrowIcon/>
                </div>
                <button className="btn btn-primary btn-success">
                <Link to={`/edit/${slug}`}>Editer</Link>
                </button>
                <div>
                <h3 className='textcenter'>{name}</h3>
                </div>
            </div>
        </div>
    )
}
export default Nav;
