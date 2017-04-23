import React from 'react';
import {fetchJsapi} from '../../actions/WechatJsapi';

export default (WrappedComponent) => {

  return class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        wechatJsApiLoading: false,
        wechatJsApiSuccess: false,
        wechatBrowser: false
      };
    }

    componentDidMount() {

      const ua = navigator.userAgent.toLowerCase();
      const wechatBrowser = ua.indexOf('micromessenger') !== -1;

      if (wechatBrowser) {
        const { dispatch } = this.props;
        dispatch(fetchJsapi(window.location.href));
        this.setState({
          wechatBrowser,
          wechatJsApiLoading: true
        });
      }
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