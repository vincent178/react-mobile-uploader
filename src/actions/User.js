import "isomorphic-fetch";
import * as types from "../constants/ActionType";

function updateUser(id, data) {
  return {
    type: types.USER_UPDATE,
    id,
    data
  }
}

function getUser() {
  return {
    type: types.USER_GET
  }
}

export function fetchMe() {

  return async dispatch => {

    const res = await fetch(`/api/v1/users/me`, {
      credentials: 'same-origin'
    });

    if (res.status < 300) {
      dispatch(getUser())
    } else {
      console.log('fetchMe action error');
    }
  }
}

export function fetchUser(id) {

  return async dispatch => {

    const res = await fetch(`/api/v1/users/${id}`);

    if (res.status < 300) {

      const result = await res.json();

      dispatch(getUser())

    } else {

      console.log(`fetchUser with: ${id} error`);
    }
  }
}

export function doFollow(id) {

  return async dispatch => {

    const res = await fetch(`/api/v1/users/${id}/follow`, {
      method: 'POST',
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      dispatch(updateUser(id, {
        meta: {
          is_following: true
        }
      }));

    } else {
      console.log('doFollow action error');
    }
  }
}

export function doUnfollow(id) {

  return async dispatch => {

    const res = await fetch(`/api/v1/users/${id}/unfollow`, {
      method: 'POST',
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      dispatch(updateUser(id, {
        meta: {
          is_following: false
        }
      }));

    } else {
      console.log('doUnfollow action error');
    }
  }
}