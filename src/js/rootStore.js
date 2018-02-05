import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, promiseMiddleware())));

export default rootStore;