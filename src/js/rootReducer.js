import { combineReducers } from 'redux';
import signUpReducer from './containers/SignUp/SignUpForm/signUpReducer';
import orderlistReducer from './containers/Cart/OrderList/orderlistReducer';
import paymentformReducer from './containers/Cart/PaymentForm/paymentformReducer';
import landingpageReducer from './containers/LandingPage/LandingPage/landingpageReducer';
import loginReducer from './containers/LandingPage/Login/loginReducer';
import searchbarReducer from './containers/LandingPage/SearchBar/searchbarReducers';
import menuitemReducer from './containers/RestaurantDetail/MenuItem/menuitemReducer';
import restaurantlistReducer from './containers/RestaurantSearch/RestaurantList/restaurantlistReducer';


const rootReducer = combineReducers({
    signup: signUpReducer
    //ADD REDUCERS HERE:
});
    
export default rootReducer;

// //make navbar folder!!!