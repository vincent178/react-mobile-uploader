import * as types from "../constants/ActionType";

export function setWechatBrowser(isWechatBrowser) {

  return {
    type: types.SET_APP_WECHAT_BROWSER,
    isWechatBrowser
  };

}