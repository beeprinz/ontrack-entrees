import { combineReducers } from 'redux';
import signupReducer from './containers/AccountSettings/SignUp/signupReducer';
import orderlistReducer from './containers/Cart/OrderList/orderlistReducer';
import paymentformReducer from './containers/Cart/PaymentForm/paymentformReducer';
import landingpageReducer from './containers/LandingPage/LandingNavBar/landingpageReducer';
import loginReducer from './containers/LandingPage/Login/loginReducer';
import searchbarReducer from './containers/LandingPage/SearchBar/searchbarReducers';
import menuitemReducer from './containers/RestaurantDetail/MenuItem/menuitemReducer';
import restaurantlistReducer from './containers/RestaurantSearch/RestaurantList/restaurantlistReducer';
import signupformReducer from './containers/SignUp/SignUpForm/signupformReducer';


const rootReducer = combineReducers({
signupReducer: signupReducer
});

export default rootReducer;

//make navbar folder!!!