import React ,{  useState }from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { ApplicationProvider } from './context/dataContext';
import CheckoutPage from './pages/CheckoutPage';
interface User{
  id:string;
  title:string;
  oldPrice:number;
  salePrice:number;
  quantity:number;
  value:number;
  description:string

};


const App = () => {
  return (
    <Router>
      <ApplicationProvider>
        <Switch>
          <Route exact path={'/product/:id'}>
            <ProductPage  />
          </Route>
          <Route exact path={'/checkout'}>
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
