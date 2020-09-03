import React from 'react';
import HomeContainer from '../Home/Home.container';
import AddScoreContainer from '../AddScore/AddScore.container';
import CreatePlayerContainer from '../CreatePlayer/CreatePlayer.container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/add_score' component={AddScoreContainer} />
      <Route exact path='/create_player' component={CreatePlayerContainer} />
    </Switch>
  </Router>
  );
}

export default App;
