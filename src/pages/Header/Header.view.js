import React from 'react';
import { Link } from 'react-router-dom';
import Dice from '../../Assets/dice.svg';
import Pencil from '../../Assets/pencil.svg';
import PencilActive from '../../Assets/pencil_active.svg';
import Settings from '../../Assets/settings.svg';
import { HomeOutlined, LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './Header.css';


const HeaderView = (props) => {
  const {
    menuClosed,
    toggleMenuOpen,
    currentPage,
  } = props;

  console.log('currentPage', currentPage);
  

  return (
    <section className='header-container'>
      <main className='header_main'>
        <button className='btn_container menu-container' onClick={() => toggleMenuOpen(!menuClosed)}>
          {menuClosed ? <MenuUnfoldOutlined className='menu_btn' /> : <MenuFoldOutlined className='menu_btn'/>}
        </button>
        <Link to='/' className='btn_container'>
          <HomeOutlined className='home-icon' style={currentPage === '/' ? {color: '#fcd5ce'} : null} />
        </Link>
        <button className='btn_container'>
          <LogoutOutlined className='signout-icon'/>
        </button>
      </main>
      {menuClosed ? 
        null :
      <main className='nav-main'>
        <Link to='/add_score' className='nav_btn-wrapper'>
          <img src={currentPage === '/add_score' ? PencilActive : Pencil} alt='pencil icon' className='nav_icon' />
          <p className='nav_label game_label' style={currentPage === '/add_score' ? {color: '#fcd5ce'} : null}>Add Score</p>
        </Link>
        <div className='nav_btn-wrapper'>
          <img src={Dice} alt='dice icon' className='nav_icon' />
          <p className='nav_label game_label'>Game Modes</p>
        </div>
        <div className='nav_btn-wrapper settings_wrapper'>
          <img src={Settings} alt='settings icon' className='nav_icon settings_icon' />
          <p className='nav_label settings_label'>Settings</p>
        </div>
      </main>
      }   
    </section>
  )
}

export default HeaderView;