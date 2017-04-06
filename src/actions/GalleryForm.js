import * as types from "../constants/ActionType";

export function galleryFormChangeTitle(title) {
  return {
    type: types.GALLERY_FORM_CHANGE_TITLE,
    title
  }
}

export function galleryFormAddPhoto(photo) {
  return {
    type: types.GALLERY_FORM_ADD_PHOTO,
    photo
  }
}

