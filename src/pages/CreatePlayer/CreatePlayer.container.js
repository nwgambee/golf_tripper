import React, { useState } from 'react';
import CreatePlayerView from './CreatePlayer.view';
import './CreatePlayer.css';


const CreatePlayerContainer = (props) => {
  const currentPage = props.match.path;

  return (
  <CreatePlayerView 
    currentPage={currentPage}
  />
  )
}

export default CreatePlayerContainer;