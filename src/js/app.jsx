import React from 'react';
import { 
  HashRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
// import AccountSettings from './containers/AccountSettings/SignUp/SignUp';
// import Cart from './containers/Cart/OrderList/OrderList';
// import PaymentForm from './containers/Cart/PaymentForm/PaymentForm'
// import LandingPage from './containers/LandingPage/LandingNavbar/landingPage';
// import Login from './containers/LandingPage/Login/Login';
// import SearchBar from './containers/LandingPage/SearchBar/SearchBar';
import OrderHistory from './containers/OrderHistory/HistoryList/HistoryList';
// import RestaurantDetail from './containers/RestaurantDetail/MenuItem/MenuItem';
// import RestaurantList from './containers/RestaurantSearch/RestaurantList/RestaurantList';
// import SignUp from './containers/SignUp/SignUpForm/SignUpForm';
import NotFound from './components/NotFound/NotFound';
import ThankYou from './components/ThankYou/ThankYou';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div> 
          <Route exact path='/notfound' component={ NotFound }/> 
          <Route exact path='/thankyou' component={ ThankYou } /> 
          {/* <Route path='/user/:id/orders' component={ OrderHistory } />   */}
          <Route path='/user/orders' component={ OrderHistory } />   
 
        </div>
      </Router>
    );
  }
}
//<Route path='/NotFound'  />
// <Route path='/signup' component={ SignUp } />
// <Route path='/nearby' component={ RestaurantList } />
// <Route path='/user/:id' component={ AccountSettings } />
// <Route path='/user/:id/orders' component={ OrderHistory } />
// <Route path='/user/:id/cart' component={ Cart } />
// <Route path='/restaurant/:id' component={ RestaurantList } />
// <Route path='/thankyou' component={ ThankYou } />