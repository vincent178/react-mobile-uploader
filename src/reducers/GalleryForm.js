import * as types from '../constants/ActionType';
import * as _ from 'lodash';

const initialState = {
  title: null,
  photos: []
};

export default function galleryFormReducer(state = initialState, action) {

  switch (action.type) {

    case types.GALLERY_FORM_CHANGE_TITLE:
      return {
        title: action.title,
        photos: state.photos
      };

    case types.GALLERY_FORM_REORDER:
      return {
        title: state.title,
        photos: action.photos
      };

    case types.GALLERY_FORM_ADD_PHOTO:

      return {
        title: state.title,
        photos: Array.from(new Set([...state.photos, action.photoId]))
      };

    case types.GALLERY_FORM_REMOVE_PHOTO:
      
      return {
        title: state.title,
        photos: _.filter(state.photos, (n) => n !== action.photoId)
      };
      
    case types.GALLERY_FORM_CLEAR:
      return initialState;

    default:
      return state;
  }
}