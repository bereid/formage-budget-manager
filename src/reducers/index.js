import { combineReducers } from 'redux';
import getAllDataReducer from './getAllDataReducer';

const rootReducer = combineReducers({
  getAllDataReducer,
});

export default rootReducer;