import * as types from '../constants/ActionType';

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

    case types.GALLERY_FORM_ADD_PHOTO:
      return {
        title: state.title,
        photos: [...state.photos, action.photo]
      };

    case types.GALLERY_FORM_CLEAR:
      return initialState;

    default:
      return state;
  }
}