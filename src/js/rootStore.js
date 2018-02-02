import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './rootReducer';
import { combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
function tempReducer () {
  return null;
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootStore = createStore(tempReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));
export default rootStore;