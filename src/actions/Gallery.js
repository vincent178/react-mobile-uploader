import "isomorphic-fetch";
import {galleryFormClear} from "./GalleryForm";
import * as types from "../constants/ActionType";
import {normalize} from "normalizr";
import {GalleryEntity, CommentListSchema, CommentEntity} from "../constants/Schema";

function receiveGalleries(entities, galleries) {

  return {
    type: types.RECEIVE_GALLERY,
    entities,
    galleries
  }

}

function updateGallery(slug, data) {

  return {
    type: types.UPDATE_GALLERY,
    slug,
    data
  }
}

function receiveGalleryComments(slug, entities, comments) {

  return {
    type: types.GALLERY_COMMENTS_LIST,
    slug,
    entities,
    comments
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

    const res = await fetch(`/api/v1/galleries/${slug}`, {
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      const jsonRes = await res.json();
      const normalized = normalize(jsonRes, GalleryEntity);
      dispatch(receiveGalleries(normalized.entities, [normalized.result]));

    } else {

      console.log(`fetchGallery action error: ${slug} `);

    }
  }
}

export function likeGallery(slug) {

  return async dispatch => {

    const res = await fetch(`/api/v1/galleries/${slug}/like`, {
      method: 'POST',
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      dispatch(updateGallery(slug, {meta: {
        is_liked: true
      }}));

    } else {
      console.log('likeGallery action error');
    }
  }
}

export function unlikeGallery(slug) {

  return async dispatch => {

    const res = await fetch(`/api/v1/galleries/${slug}/unlike`, {
      method: 'POST',
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      dispatch(updateGallery(slug, {meta: {
        is_liked: false
      }}));

    } else {
      console.log('unlikeGallery action error');
    }

  };
}

export function createGalleryComment(slug, content) {

  return async dispatch => {

    const body = {
      content
    };

    const res = await fetch(`/api/v1/galleries/${slug}/comments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      const jsonRes = await res.json();
      const normalized = normalize(jsonRes, CommentEntity);
      dispatch(receiveGalleryComments(slug, normalized.entities, [normalized.result]));

    } else {
      console.log('createGalleryComment action error');
    }

  };
}

export function fetchGalleryComments(slug) {

  return async dispatch => {

    const res = await fetch(`/api/v1/galleries/${slug}/comments`);

    if (res.status < 300) {

      const jsonRes = await res.json();
      const normalized = normalize(jsonRes, CommentListSchema);
      dispatch(receiveGalleryComments(slug, normalized.entities, normalized.result));

    } else {
      console.log('fetchGalleryComments action error');
    }
  }
}

