import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchGallery} from "../../actions/Gallery";
import UserCard from "../../components/user-card/UserCard";
import "./style.css";
import PlaceHolder from "../../components/placeholder/PlaceHolder";
import ReplyInputCard from "../../components/reply-input-card/ReplyInputCard";
import LikeButton from "../../components/like-button/LikeButton";


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
    const { dispatch, match: { params } } = this.props;

    dispatch(fetchGallery(params.slug))
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

    const { entity: { galleries }, match: { params } } = this.props;

    const slug = params.slug;
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
    const { entity: { galleries }, dispatch, match: { params } } = this.props;

    const slug = params.slug;
    const gallery = galleries[slug];
    const creator = gallery.creator;
    const meta = gallery.meta;
    const isLiked = meta.is_liked;

    return (
      <div style={{background: 'white'}}>
        <h1 className="m-h1-title">{gallery.name}</h1>
        <div className="m-subtitle gallery-subtitle">
          <span className="gallery-subtitle-text">{creator.name}</span>
          ·
          <span className="gallery-subtitle-text">{gallery.created_at}</span>
        </div>
        {
          gallery && gallery.photos && gallery.photos.length > 0
            ? gallery.photos.map(photo =>
            <img src={photo.photo_url}
                 key={photo.id}
                 style={{width: '100%'}}
                 onClick={this.handlePhotoClick.bind(this, photo)} />)
            : null

        }
        <div className="gallery-action">
          <div className="m-circle gallery-action-button">
            <LikeButton isLiked={isLiked} dispatch={dispatch} id={slug} />
          </div>
        </div>

        <PlaceHolder />

        <UserCard avatar={creator.avatar} name={creator.name} isMe={meta.is_me} isFollowing={meta.is_following}/>

        <PlaceHolder />

        <ReplyInputCard />

        <PlaceHolder />

        <div style={{height: '60px', width: '100%'}}></div>
      </div>
    )
  }

  render() {

    const { loading } = this.state;
    const { wechatJsApiLoading, entity: { galleries } } = this.props;

    const computedLoading = loading || wechatJsApiLoading;

    return (
      <div style={{display: 'flex'}}>
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