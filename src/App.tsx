import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ApplicationProvider } from './context/dataContext';

const App = () => {
  return (
    <Router>
      <ApplicationProvider>
        <Switch>
          <Route path={'/'}>
            <HomePage />
          </Route>
        </Switch>
      </ApplicationProvider>
    </Router>
  );
};

export default App;
