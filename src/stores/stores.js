import { combineReducers, createStore, applyMiddleware } from 'redux';
import { fetchReducer } from '../reducers/fetchReducer';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    fetchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));