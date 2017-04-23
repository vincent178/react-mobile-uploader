import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGallery} from '../../actions/Gallery';
import Photo from "../../components/photo/Photo";


class Gallery extends Component {

  constructor(props) {

    super(props);

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderGallery = this.renderGallery.bind(this);

    this.state = {
      loading: true
    }

  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchGallery('dce60d96-ca7d-4778-bb9b-acd94f39ffdc'))
      .then(() => {
        this.setState({loading: false})
      })

  }

  componentWillReceiveProps(nextProps) {

    if (!this.state.loading) {

      window.wx.ready(() => {

        const shareOptions = {
          title: '',
          desc: '',
          link: '',
          imgUrl: ''
        };

        window.wx.onMenuShareTimeline(shareOptions);

        window.wx.onMenuShareAppMessage(shareOptions);

        window.wx.onMenuShareQQ(shareOptions);

        window.wx.onMenuShareWeibo(shareOptions);

        window.wx.onMenuShareQZone(shareOptions);

      });
    }
  }

  handlePhotoClick(photo) {

    const { entity: { galleries } } = this.props;

    const slug = 'dce60d96-ca7d-4778-bb9b-acd94f39ffdc';
    const gallery = galleries[slug];
    const urls = gallery.photos.map(_ => _.photo_url);

    photo = gallery.photos[0];

    window.wx.previewImage({
      current: photo.photo_url,
      urls
    });
  }

  renderLoading() {
    return <div>is loading</div>
  }

  renderGallery() {
    const { entity: { galleries } } = this.props;

    const slug = 'dce60d96-ca7d-4778-bb9b-acd94f39ffdc';
    const gallery = galleries[slug];

    return (
      <div>
        <h1>{gallery.name}</h1>
        {
          gallery && gallery.photos && gallery.photos.length > 0
            ? gallery.photos.map(photo =>
            <img src={photo.photo_url}
                 key={photo.id}
                 style={{width: '100%'}}
                 onClick={this.handlePhotoClick.bind(this, photo)} />)
            : null

        }
      </div>
    )
  }

  render() {

    const { loading } = this.state;
    const { wechatJsApiLoading, entity: { galleries } } = this.props;

    const computedLoading = loading || wechatJsApiLoading;

    return (
      <div>
        {
          computedLoading
            ? this.renderLoading()
            : this.renderGallery()
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Gallery);