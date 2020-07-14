import React from 'react';
import HomeView from './Home.view';
import './Home.css';


const HomeContainer = (props) => {
  const currentPage = props.match.path;
  console.log(props);
  
  return (
  <HomeView
    currentPage={currentPage}
  />
  )
}

export default HomeContainer;