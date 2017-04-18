import "isomorphic-fetch";
import Uuid from "uuid";
import {normalize} from "normalizr";
import {PhotoEntity} from "../constants/Schema";
import {galleryFormAddPhoto} from "./GalleryForm";

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

    const normalized = normalize(photo, PhotoEntity);

    dispatch(galleryFormAddPhoto(normalized.result, normalized.entities));

    return fetch('/photos.json', {
      method: 'POST',
      body: formForUpload,
      credentials: 'same-origin'
    })
      .then( res => res.json() )
      .then( data => {

        data.uuid = uuid;
        data.loading = false;

        const normalized = normalize(data, PhotoEntity);

        dispatch(galleryFormAddPhoto(normalized.result, normalized.entities));
      })
      .catch( e => {
        console.log(e);
      });
  }
}
