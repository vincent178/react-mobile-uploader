import React from 'react';
import {fetchJsapi} from '../actions/Wechat';

export default function WechatJsapiSDKComponent(WrappedComponent) {

  return class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        wechatJsApiLoading: true
      };
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(fetchJsapi(window.location.href));
    }

    componentWillReceiveProps(nextProps) {

      if (nextProps.wechatJsapi.signature !== this.props.wechatJsapi.signature) {

        window.wx.config(nextProps.wechatJsapi);

        window.wx.ready(() => {

          this.setState({
            wechatJsApiLoading: false
          });

        });

        window.wx.error((res) => {
          console.log(res);
        });

      }

    }

    render() {
      return <WrappedComponent wechatJsApiLoading={this.state.wechatJsApiLoading} {...this.props} />
    }

  };

}