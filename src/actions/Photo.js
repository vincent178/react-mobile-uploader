import "isomorphic-fetch";
import Uuid from 'uuid';
import {normalize} from "normalizr";
import {RECEIVE_PHOTO} from "../constants/ActionType";
import {PhotoEntity} from "../constants/Schema";
import {galleryFormAddPhoto} from "./GalleryForm";

function receivePhoto(entities, photos) {
  return {
    type: RECEIVE_PHOTO,
    entities,
    photos
  }
}


export function uploadPhoto(image, imageDataUrl) {
  const uuid = Uuid.v4();

  const formForUpload = new FormData();

  formForUpload.append('photo[image]', image);

  return dispatch => {

    const photo = {
      uuid,
      uri: imageDataUrl,
      loading: true
    };

    const normalized = normalize([photo], [PhotoEntity]);
    
    dispatch(receivePhoto(normalized.entities, normalized.result));

    return fetch('/photos.json', {
      method: 'POST',
      body: formForUpload,
      credentials: 'same-origin'
    })
      .then( res => res.json() )
      .then( data => {

        data.uuid = uuid;
        data.loading = false;

        const normalized = normalize([data], [PhotoEntity]);
        dispatch(receivePhoto(normalized.entities, normalized.result));
        dispatch(galleryFormAddPhoto(data.id));

      })
      .catch( e => {

        console.log(e);

      });
  }
}