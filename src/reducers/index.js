import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  gamesReducer,
});

export default rootReducer;
