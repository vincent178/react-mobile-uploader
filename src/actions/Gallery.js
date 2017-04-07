import "isomorphic-fetch";
import {galleryFormClear} from "./GalleryForm";

export function createGallery(title, photos) {

  const photo_ids = photos.reduce((photo_ids, id, index) => {
    photo_ids[id] = index;
    return photo_ids;
  }, {});
  
  return dispatch => {

    const body = {
      gallery: {
        name: title,
        photo_ids: JSON.stringify(photo_ids)
      }
    };

    return fetch('/galleries.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'same-origin'
    })
      .then( res => res.json() )
      .then( data => {
        dispatch(galleryFormClear());
        window.location.replace('/');
      })
      .catch( e => {

      });

  };
}

