import { combineReducers } from 'redux';
import gallery from './Gallery';
import entity from './Entity';
import photo from './Photo';
import galleryForm from './GalleryForm';
import wechatJsapi from './WechatJsapi';
import app from './App';



export default combineReducers({
  app,
  photo,
  gallery,
  entity,
  galleryForm,
  wechatJsapi
});
