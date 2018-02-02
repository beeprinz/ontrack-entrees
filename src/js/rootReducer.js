import { combineReducers } from 'redux';
import signUpReducer from './containers/SignUp/SignUpForm/signUpReducer';
import orderlistReducer from './containers/Cart/OrderList/orderlistReducer';
import paymentformReducer from './containers/Cart/PaymentForm/paymentformReducer';
import landingpageReducer from './containers/LandingPage/LandingPage/landingpageReducer';
import searchbarReducer from './containers/LandingPage/SearchBar/searchbarReducers';
import menuitemReducer from './containers/RestaurantDetail/MenuItem/menuitemReducer';
import restaurantlistReducer from './containers/RestaurantSearch/RestaurantList/restaurantlistReducer';
import loginReducerPage from './containers/Login/loginReducer'
// import accountSettingReducer from './containers/AccountSettings/AccountSettings/accountSettingReducer';
// console.log(searchbarReducer,'rootreduc')

const rootReducer = combineReducers({
    //ADD REDUCERS HERE:
    signup: signUpReducer,
    nearbylist:restaurantlistReducer,
    searchbarReducer: searchbarReducer,
    email:loginReducer,
    login: loginReducerPage
});
    
export default rootReducer;

// //make navbar folder!!!