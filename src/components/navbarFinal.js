import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavComponents/Navitem';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as Search } from './icons/search.svg';
import Peep from './peep.jpg';
import './navbarFinal.css';
import PropTypes from 'prop-types';
function NavBarFinal({}) {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <NavItem icon={<Search/>} />
          <Link to='/create' ><NavItem icon={<PlusIcon/>} /></Link>
          
          <Link to='/' ><NavItem icon={< BellIcon/>} /></Link>
          
          <NavItem icon={<MessengerIcon/>} />
          <div className='profile'>
            <img src={Peep} />
          </div>
          </div>
      </nav>
    </>
  )
};
export default NavBarFinal;