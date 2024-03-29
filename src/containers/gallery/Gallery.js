import React from "react";
import {connect} from "react-redux";
import {fetchGallery, fetchGalleryComments} from "../../actions/Gallery";
import UserCard from "../../components/user-card/UserCard";
import ReplyCard from "../../components/reply-card/ReplyCard";
import "./style.css";
import PlaceHolder from "../../components/placeholder/PlaceHolder";
import ReplyInputCard from "../../components/reply-input-card/ReplyInputCard";
import LikeButton from "../../components/like-button/LikeButton";
import SpinnerCircle from "../../components/spinner-circle/SpinnerCircle";


class Gallery extends React.PureComponent {

  constructor(props) {

    super(props);

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderGallery = this.renderGallery.bind(this);

    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    const { dispatch, match: { params } } = this.props;

    await dispatch(fetchGallery(params.slug));
    await dispatch(fetchGalleryComments(params.slug));

    this.setState({loading: false});
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
    return (
      <div className="m-spinner">
        <SpinnerCircle width={30} color={"rgb(102, 117, 127)"} />
      </div>
    );
  }

  renderGallery() {
    const { entity: { galleries, users, comments }, dispatch, match: { params } } = this.props;

    const slug = params.slug;
    const gallery = galleries[slug];
    const creator = users[gallery.creator];

    const galleryMeta = gallery.meta;
    const isLiked = galleryMeta.is_liked;

    return (
      <div style={{background: 'white'}}>
        <h1 className="m-h1-title">{gallery.name}</h1>
        <div className="m-subtitle gallery-subtitle">
          <div>

            <span className="gallery-subtitle-text">
              <i className="fa fa-thumbs-up" aria-hidden="true" />
              {gallery.like_count}
            </span>

            <span className="gallery-subtitle-text">
              <i className="fa fa-eye" aria-hidden="true" />
              {gallery.pv_count}
            </span>

            <span className="gallery-subtitle-text">
              <i className="fa fa-comment" aria-hidden="true" />
              {gallery.comment_count}
            </span>
          </div>

          <div>
            <span className="gallery-subtitle-text">{creator.name}</span>
            ·
            <span className="gallery-subtitle-text">{gallery.created_at}</span>
          </div>
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
          <div className="m-circle gallery-action-button" style={{background: isLiked ? "#fff" : "#1e6acf"}}>

            <LikeButton
              isLiked={isLiked}
              dispatch={dispatch}
              id={slug} />

          </div>
        </div>

        <PlaceHolder />

        <UserCard
          user={creator}
          dispatch={dispatch} />

        <PlaceHolder />

        <ReplyInputCard slug={slug}
                        dispatch={dispatch} />

        <PlaceHolder />

        <div className="gallery-comment-count">{`最新评论 ${gallery.comment_count}`}</div>
        {
          gallery && gallery.comments && gallery.comments.length > 0
            ?
            gallery.comments.map(commentId => {
              const comment = comments[commentId];
              return <ReplyCard comment={comment} key={comment.id} />
            })
            : null
        }

        <div style={{height: '60px', width: '100%'}} />
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