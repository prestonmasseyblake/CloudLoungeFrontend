import React from 'react';
const DropdownItem = (props) => {
    return (
      <a href="#" className="menu-item" 
      // nClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  export default DropdownItem;