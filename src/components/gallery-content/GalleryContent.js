
export default (gallery, creator) => {


  return (
    <div>
      <h1>{gallery.name}</h1>
      <div>
        {creator.name}.{gallery.created_at}
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
    </div>
  );
};