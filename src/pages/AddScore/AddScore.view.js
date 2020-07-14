import React from 'react';
import HeaderContainer from '../Header/Header.container';
import './AddScore.css';

const AddScoreView = (props) => {
  const {
    currentPage,
  } = props;
  return (
    <main className='add-score_container'>
      <HeaderContainer currentPage={currentPage}/>
      <section className='add-score_main'>
        <h1 className='add-score_title'>Scores Will Be Added Here</h1>
      </section>
    </main>
  )
}

export default AddScoreView;