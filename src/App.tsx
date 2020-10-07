import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { ApplicationProvider } from './context/dataContext';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <Router>
      <ApplicationProvider>
        <Switch>
          <Route path={'/product'}>
            <ProductPage />
          </Route>
          <Route path={'/checkout'}>
            <CheckoutPage />
          </Route>

          <Route exact path={'/'}>
            <HomePage />
          </Route>
        </Switch>
      </ApplicationProvider>
    </Router>
  );
};

export default App;
