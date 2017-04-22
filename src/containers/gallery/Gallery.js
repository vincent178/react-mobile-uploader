import React, {Component} from 'react';


export default class Gallery extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {


  }

  render() {

    window.wx.previewImage({
      current: 'http://7xjgwh.com1.z0.glb.clouddn.com/uploads/photo/image/207997/234428sojh50jwtu9utwhu.jpg',
      urls: []
    });


    return (
      <div>
        <h1>11</h1>
      </div>
    );
  }
}