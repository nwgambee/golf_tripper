import React from 'react';
import HeaderContainer from '../Header/Header.container';
import './Home.css';
import iphone from '../../Assets/iphone.svg';


const HomeView = (props) => {
  const {
    currentPage
  } = props;
  return (
    <main className='home-main'>
      <HeaderContainer currentPage={currentPage} />
      <section className='main'>
        <h1 className='title'>Orlando 2020 Tracking App</h1>
        <img src={iphone} alt='phone icon' className='phone-icon' />
      </section>
    </main>
  )
}

export default HomeView;