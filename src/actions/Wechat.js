import request from 'request-promise-native';
import * as types from "../constants/ActionType";

function receiveJsapi(appId, timestamp, nonceStr, signature) {

  const debug = true;
  const jsApiList = ['previewImage'];

  const config = {
    debug,
    appId,
    timestamp,
    nonceStr,
    signature,
    jsApiList
  };


  return {
    type: types.RECEIVE_WECHAT_JSAPI,
    config
  }
}

export function fetchJsapi(url) {

  return async dispatch => {

    const options = {
      qs: {
        url
      }
    };

    const jsapi = await request('http://localhost:3000/wechat/jsapi', options);
    const jsapiObj = JSON.parse(jsapi);

    const { appId, timestamp, nonceStr, signature } = jsapiObj;

    console.log(jsapiObj);

    dispatch(receiveJsapi(appId, timestamp, nonceStr, signature));
  }

}