import React, {useState, useEffect, Fragment, useRef} from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavComponents/Navitem';
import Peep from './peep.jpg';
import './navbarFinal.css';
import PropTypes from 'prop-types';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';
import DropdownItem from './NavComponents/DropDownItem';


const NavBarFinal =({}) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link style={{ textDecoration: 'none' }} className='main-logo' to='/'>
        <div className='logo'>
         ☁️
        </div>
        </Link>
        
          <Link style={{ textDecoration: 'none' }} to='/create' ><NavItem icon={<PlusIcon/>} /></Link>
          <Link style={{ textDecoration: 'none' }} to='/' ><NavItem icon={< BellIcon/>} /></Link>
          <NavItem icon={<MessengerIcon/>} />
          <NavItem icon={< CogIcon/>}>
            
            <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

                <CSSTransition
                  in={activeMenu === 'main'}
                  timeout={500}
                  classNames="menu-primary"
                  unmountOnExit
                  onEnter={calcHeight}>
                  <div className="menu">
                    <DropdownItem>Theme</DropdownItem>
                    <DropdownItem
                      leftIcon={<CogIcon />}
                      rightIcon={<ChevronIcon />}
                      goToMenu="settings"
                      setActiveMenu={setActiveMenu}>
                        
                      Settings
                    </DropdownItem>
                    <DropdownItem
                      leftIcon="🦧"
                      rightIcon={<ChevronIcon />}
                      goToMenu="animals"
                      setActiveMenu={setActiveMenu}>
                      Animals
                    </DropdownItem>

                  </div>
                  </CSSTransition>
                  </div>
            
            </NavItem>
          <div className='profile'>
            <img src={Peep} />
          </div>
          </div>
          
      </nav>
    </>
  )
};
export default NavBarFinal;