import { createStore, combineReducers } from 'redux';
import { boardReducer, tickReducer } from './reducers';

const rootReducer = combineReducers({ 
    boardReducer,
    tickReducer,
 });

const store = createStore(rootReducer);

export default store;