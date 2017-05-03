import "isomorphic-fetch";
import * as types from "../constants/ActionType";

function updateUser(id, data) {
  return {
    type: types.USER_UPDATE,
    id,
    data
  }
}

export function fetchMe() {

  return async dispatch => {

    const res = await fetch(`/api/v1/users/me`);

    const jsonRes = await res.json();

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
          isFollowing: true
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
          isFollowing: false
        }
      }));

    } else {
      console.log('doUnfollow action error');
    }
  }
}