import * as types from '../constants/ActionType';

export function createGallery(title, photos) {

  console.log('title: ');
  console.log(title);

  console.log('photos: ');
  console.log(photos);

  return {
    type: types.CREATE_GALLERY
  }
}

