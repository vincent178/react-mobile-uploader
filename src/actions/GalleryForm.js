import * as types from "../constants/ActionType";

export function galleryFormChangeTitle(title) {
  return {
    type: types.GALLERY_FORM_CHANGE_TITLE,
    title
  }
}

export function galleryFormAddPhoto(photoId) {
  return {
    type: types.GALLERY_FORM_ADD_PHOTO,
    photoId
  }
}

export function galleryFormRemovePhoto(photoId) {
  return {
    type: types.GALLERY_FORM_REMOVE_PHOTO,
    photoId
  }
}

export function galleryFormClear() {
  return {
    type: types.GALLERY_FORM_CLEAR
  }
}

