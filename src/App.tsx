import React from 'react';
import Hearder from './AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
    <Hearder/>

  );
};

export default App;
