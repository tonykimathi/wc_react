import {auth, passwordReset} from './AuthReducer';
import { businesses, business } from './BusinessesReducer';
import crud from './BusinessReducer';
import { combineReducers } from 'redux';

/**
 * Combine and export all Reducer
 */
export default combineReducers({
  auth,
  crud,
  businesses,
  business,
  passwordReset
});
