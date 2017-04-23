import * as types from "../constants/ActionType";

const initialState = {
  appLoaded: false,
  appName: '',
  currentUser: null,
  redirectTo: '',
  wechatBrowser: false
};

export default (state = initialState, action) => {

  switch (action.type) {

    case types.SET_APP_WECHAT_BROWSER:

      return Object.assign({}, state, {
        wechatBrowser: action.isWechatBrowser
      });

    default:
      return state;
  }

};