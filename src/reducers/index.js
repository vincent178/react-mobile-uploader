import { combineReducers } from 'redux';
import gallery from './Gallery';
import entity from './Entity';
import photo from './Photo';



export default combineReducers({
  photo,
  gallery,
  entity
});
