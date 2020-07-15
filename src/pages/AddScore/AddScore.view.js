import React from 'react';
import { } from '@ant-design/icons';
import { } from 'antd';
import HeaderContainer from '../Header/Header.container';
import './AddScore.css';

const AddScoreView = (props) => {
  const {
    currentPage,
    handleScoreChange,
    score,
    displayingScores,
    toggleDisplayingScores,
  } = props;

  return (
    <main className='add-score_container'>
      <HeaderContainer currentPage={currentPage}/>
      <div className='main-container'>
        <section className='add-score_main'>
        <div className='input-wrapper'>
          <h1 className='score-label add-score_title'>Select Golf Course:</h1>
          <select className='course-selector'>
            <option className='course-options'>Select Course</option>
            <option className='course-options'>OCN Crooked Cat</option>
            <option className='course-options'>OCN Panther Lake</option>
            <option className='course-options'>Winter Park</option>
            <option className='course-options'>Mission Inn</option>
          </select>
          </div>
          <div className='input-wrapper'>
            <label className='score-label'>Score:</label>
            <input className='score-input' value={score} onChange={(e) => handleScoreChange(e.target.value)} type='number' placeholder='Score' />
          </div>
          <button className='submit-score-btn'>Submit</button>
        </section>
        <button className='view-scores-btn' style={displayingScores ? {color: '#FCD5CE'} : null} onClick={() => toggleDisplayingScores(!displayingScores)}>View My Scores</button>
        <section className='add-score_main' style={!displayingScores ? {display: 'none'} : null}>
          <p>scores here</p>
        </section>
      </div>
    </main>
  )
}

export default AddScoreView;