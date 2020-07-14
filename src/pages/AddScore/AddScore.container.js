import React from 'react';
import AddScoreView from './AddScore.view';

const AddScoreContainer = (props) => {
  const currentPage = props.match.path;
  return (
  <AddScoreView currentPage={currentPage}/>
  )
}

export default AddScoreContainer;