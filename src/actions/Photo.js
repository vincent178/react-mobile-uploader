import 'isomorphic-fetch';
import {normalize, arrayOf} from 'normalizr';
import {RECEIVE_PHOTO} from '../constants/ActionType'
import {PhotoEntity} from '../constants/Schema';

function receivePhoto(entities, photos) {
  return {
    type: RECEIVE_PHOTO,
    entities,
    photos
  }
}


export function uploadPhoto(image, weight) {

  const data = new FormData();

  data.append('photo[image]', image);
  data.append('photo[weight]', weight);


  return dispatch => {
    return fetch('/photos.json', {
      method: 'POST',
      body: data,
      credentials: 'same-origin'
    })
      .then( res => res.json() )
      .then( data => {

        const normalized = normalize([data], [PhotoEntity]);
        dispatch(receivePhoto(normalized.entities, normalized.result));

      })
      .catch( e => {

        console.log(e);

      });
  }
}