import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/index';
import Saved from './pages/saved';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;