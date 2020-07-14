import React, { useState } from 'react';
import HeaderView from './Header.view';
import './Header.css';


const HeaderContainer = (props) => {
  const {
    currentPage
  } = props;
  const [ menuClosed, toggleMenuOpen ] = useState(true)

  return (
  <HeaderView 
    menuClosed={menuClosed}
    toggleMenuOpen={toggleMenuOpen}
    currentPage={currentPage}
  />
  )
}

export default HeaderContainer;