import * as types from "../constants/ActionType";

const initialState = {
  debug: true,
  appId: '',
  timestamp: '',
  nonceStr: '',
  signature: '',
  jsApiList: []
};

export default function wechatJsapiReducer(state = initialState, action) {

  switch (action.type) {

    case types.RECEIVE_WECHAT_JSAPI:
      return action.config;

    default:
      return state;
  }
}