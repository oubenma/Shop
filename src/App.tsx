import React ,{  useState }from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { ApplicationProvider } from './context/dataContext';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage'
import { ApplicationProviderCart } from './context/cartContext';
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
      <ApplicationProviderCart>
        <Switch>
          <Route exact path={'/Product/:id'} component={ProductPage}>
  
          </Route>
          <Route exact path={'/checkout'}>
            <CheckoutPage />
          </Route>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route exact path={'/cart'}>
            <CartPage />
          </Route>
          <Route exact path={'/contact'}>
            <ContactPage/>
          </Route>
        </Switch>
        </ApplicationProviderCart>
      </ApplicationProvider>
    </Router>
  );
};

export default App;
