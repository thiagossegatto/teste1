import { combineReducers } from 'redux';

import app from './app/reducer';
import search from './search/reducer';
import vehicles from './vehicles/reducer';

export default combineReducers({
  app,
  search,
  vehicles,
});
