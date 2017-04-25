import "isomorphic-fetch";
import {galleryFormClear} from "./GalleryForm";
import * as types from "../constants/ActionType";
import {normalize} from "normalizr";
import {GalleryEntity} from "../constants/Schema";

function receiveGalleries(entities, galleries) {

  return {
    type: types.RECEIVE_GALLERY,
    entities,
    galleries
  }

}

export function createGallery(title, photos) {

  const photo_ids = photos.reduce((photo_ids, id, index) => {
    photo_ids[id] = index;
    return photo_ids;
  }, {});
  
  return async dispatch => {

    const body = {
      gallery: {
        name: title,
        photo_ids: JSON.stringify(photo_ids)
      }
    };

    const res = await fetch('/galleries.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      dispatch(galleryFormClear());
      window.location.replace('/');

    } else {

      console.debug('ERR: create gallery error');
      throw new Error('createGallery error');

    }
  };
}

export function fetchGallery(slug) {

  return async dispatch => {

    const res = await fetch(`/api/v1/galleries/${slug}`);

    const jsonRes = await res.json();

    const normalized = normalize(jsonRes, GalleryEntity);

    dispatch(receiveGalleries(normalized.entities, [normalized.result]));
  }
}

