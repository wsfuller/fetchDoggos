import { combineReducers } from 'redux';
import doggos from './doggoReducer';
import breeds from './breedsReducer';

export default combineReducers({
  doggos,
  breeds
});
