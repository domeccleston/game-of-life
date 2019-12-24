import { createStore, combineReducers } from 'redux';
import { boardReducer, tickReducer, cellReducer } from './reducers';

const rootReducer = combineReducers({ 
    boardReducer,
    tickReducer,
    cellReducer,
 });

const store = createStore(rootReducer);

export default store;