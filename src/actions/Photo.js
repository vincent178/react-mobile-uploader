import "isomorphic-fetch";
import Uuid from 'uuid';
import {normalize} from "normalizr";
import {RECEIVE_PHOTO} from "../constants/ActionType";
import {PhotoEntity} from "../constants/Schema";

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
      data: imageDataUrl,
      loading: true
    };

    dispatch(receivePhoto([photo], [PhotoEntity]));

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

      })
      .catch( e => {

        console.log(e);

      });
  }
}