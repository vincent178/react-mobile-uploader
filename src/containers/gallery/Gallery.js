import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGallery} from '../../actions/Gallery';
import Photo from "../../components/shared/photo/Photo";


class Gallery extends Component {

  constructor(props) {

    super(props);

    this.handlePhotoClick = this.handlePhotoClick.bind(this);

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

  handlePhotoClick(photo) {

    console.log("FFFFFFFFFFFFFFF");

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

  render() {

    const { loading } = this.state;
    const { wechatJsApiLoading, entity: { galleries } } = this.props;

    const computedLoading = loading || wechatJsApiLoading;

    const slug = 'dce60d96-ca7d-4778-bb9b-acd94f39ffdc';
    const gallery = galleries[slug];

    console.log(galleries);

    console.log(gallery);

    console.log(gallery && gallery.photos && gallery.photos.length > 0);


    return (
      <div>
        { computedLoading ? <h1>is loading</h1> : null }

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
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Gallery);