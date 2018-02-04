import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountSettings from './containers/AccountSettings/SignUp/SignUp';
import Cart from './containers/Cart/OrderList/OrderList';
import PaymentForm from './containers/Cart/PaymentForm/PaymentForm'
import LandingPage from './containers/LandingPage/LandingPage/landingPage';
import SearchBar from './containers/LandingPage/SearchBar';

import OrderHistory from './containers/OrderHistory/HistoryList/HistoryList';
import RestaurantDetail from './containers/RestaurantDetail/MenuItem/MenuItem';
import RestaurantList from './containers/RestaurantSearch/RestaurantList';
import SignUp from './containers/SignUp/SignUpForm';
import NotFound from './components/NotFound/NotFound';
import ThankYou from './components/ThankYou/ThankYou';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path='/search' component={ SearchBar } />
        {/* <Route exact path='/' component={ LandingPage } />
        <Route path='/signup' component={ SignUp } /> */}
        <Route path='/nearby/:listings' component={ RestaurantList } />
        {/* <Route path='/user/:id' component={ AccountSettings } />
        <Route path='/user/:id/orders' component={ OrderHistory } />
        <Route path='/user/:id/cart' component={ Cart } />
        <Route path='/restaurant/:id' component={ RestaurantList } />
        <Route path='/thankyou' component={ ThankYou } />
        <Route exact path='/notfound' component={ NotFound }/>  */}

        </Switch>
    </Router>
    );
  }
}