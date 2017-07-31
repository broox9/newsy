import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import initialState from './initialState';

const composeEnhancers = composeWithDevTools({ name: 'SomeApp', shouldCatchErrors: true });

const enhancers = composeEnhancers(applyMiddleware(thunk));

/* finally the store */
const appStore = createStore(rootReducer, initialState, enhancers);

export default appStore;