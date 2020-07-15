import React, { useState } from 'react';
import AddScoreView from './AddScore.view';

const AddScoreContainer = (props) => {
  const currentPage = props.match.path;
  const [ selectedCourse, setSelectedCourse ] = useState('');
  const [ score, setScore ] = useState('')
  const [ displayingScores, toggleDisplayingScores ] = useState(false)
  const handleScoreChange = (inputtedScore) => {
    const inputtedScoreParsed = parseInt(inputtedScore)
    if (inputtedScoreParsed > 100 && inputtedScoreParsed < 60) {
      // throw error
      return;
    } else {
      setScore(inputtedScoreParsed)
    }
    
  }
  return (
    <AddScoreView 
      currentPage={currentPage}
      selectedCourse={selectedCourse}
      setSelectedCourse={setSelectedCourse}
      score={score}
      setScore={setScore}
      handleScoreChange={handleScoreChange}
      displayingScores={displayingScores}
      toggleDisplayingScores={toggleDisplayingScores}
    />
  )
}

export default AddScoreContainer;