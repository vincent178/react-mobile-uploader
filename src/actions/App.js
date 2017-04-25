import * as types from "../constants/ActionType";

function setCurrentUser(currentUser) {

  return {
    type: types.APP_SET_CURRENT_USER,
    currentUser
  }

}

export function setWechatBrowser(isWechatBrowser) {

  return {
    type: types.APP_SET_WECHAT_BROWSER,
    isWechatBrowser
  };

}



export function fetchCurrentUser() {

  return async dispatch => {

    const res = await fetch(`/api/v1/users/me`, {
      credentials: 'same-origin'
    });

    if (res.status < 300) {

      if (res.status === 204) {

        dispatch(setCurrentUser(undefined))

      } else {

        const data = await res.json();

        console.log(data);
      }

    } else {

      console.debug('ERR: request current user error');

    }


  };
}