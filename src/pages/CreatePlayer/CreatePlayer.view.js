import React from 'react';
import HeaderContainer from '../Header/Header.container';
import './CreatePlayer.css';


const CreatePlayerView = (props) => {
  const {
    currentPage,
  } = props;
  
  return (
    <main className='add-score_container'>
    <HeaderContainer currentPage={currentPage}/>
    <form>
     <div>
       <h3>fill out the form below to create a player</h3>
     </div>
     <label>
       <input type='text'>
       </input>
       First Name
     </label>
   </form>
  </main>
  )
}

export default CreatePlayerView;