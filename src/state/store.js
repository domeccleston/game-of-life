import { createStore, combineReducers } from 'redux';
import { testReducer } from './reducers';

const rootReducer = combineReducers({ 
    testReducer,
 });

const store = createStore(rootReducer);

export default store;