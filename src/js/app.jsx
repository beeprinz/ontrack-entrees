import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountSettings from './containers/AccountSettings/AccountSettings/AccountSettings';
import Cart from './containers/Cart/OrderList/OrderList';
import PaymentForm from './containers/Cart/PaymentForm/PaymentForm';
import LandingPage from './containers/LandingPage/LandingPage';
import Login from './containers/Login';
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
        <Route exact path='/' component={ SearchBar } />
        {/* <Route exact path='/' component={ LandingPage } /> */}
        <Route path='/signup' component={ SignUp } />
        <Route path='/nearby/' component={ RestaurantList } />
        <Route exact path='/account' component={ AccountSettings } />
        <Route path='/user/orders' component={ OrderHistory } />
        <Route path='/cart' component={ Cart } />
        <Route path='/restaurant/:id' component={ RestaurantList } />
        <Route path='/thankyou' component={ ThankYou } />
        <Route path="/login" component = { Login } />
        <Route exact path='/notfound' component={ NotFound }/> 

        </Switch>
    </Router>
   
    );
  }
}
