import { createStore, combineReducers } from 'redux';
import { boardReducer, runStateReducer, cellReducer } from './reducers';

const rootReducer = combineReducers({ 
    cellReducer,
    boardReducer,
    runStateReducer,
 });

const store = createStore(rootReducer);

export default store;