import { combineReducers } from 'redux';
import app from './Application';
import gallery from './Gallery';
import entity from './Entity';
import photo from './Photo';
import galleryForm from './GalleryForm';
import wechatJsapi from './WechatJsapi';



export default combineReducers({
  app,
  photo,
  gallery,
  entity,
  galleryForm,
  wechatJsapi
});
