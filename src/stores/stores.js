import { combineReducers } from 'redux';
import { fetchReducer } from '../reducers/fetchReducer';

const rootReducer = combineReducers({
    fetchReducer,
});

export default rootReducer;