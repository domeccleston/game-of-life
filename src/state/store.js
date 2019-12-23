import { createStore, combineReducers } from 'redux';
import { boardReducer } from './reducers';

const rootReducer = combineReducers({ 
    boardReducer,
 });

const store = createStore(rootReducer);

export default store;