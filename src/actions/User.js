import * as types from "../constants/ActionType";

function receiveMe() {

}

export function fetchMe() {

  return async dispatch => {

    const res = await fetch(`/api/v1/users/me`);

    const jsonRes = await res.json();

  }
}