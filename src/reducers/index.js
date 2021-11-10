import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
  gamesReducer,
  detailsReducer,
});

export default rootReducer;
