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

    case types.APP_SET_WECHAT_BROWSER:

      return Object.assign({}, state, {
        wechatBrowser: action.isWechatBrowser
      });

    case types.APP_SET_CURRENT_USER:

      return Object.assign({}, state, {
        currentUser: action.currentUser
      });

    default:
      return state;
  }

};