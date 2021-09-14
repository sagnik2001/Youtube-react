
const ViewVideo =({video})=>{
  if(!video){
  return(
    <div>
    <h1>Enter video to load...</h1>
    <br></br>
    <p style={{fontSize:'25px'}}>
           Play All Your Favourite Videos Here.
           Also supports searches for playlists and channels
    </p>
    </div>
  )
}
const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
console.log(typeof video);
console.log(video.id.videoId);
return (
    <div>
      <div className="ui embed">
        <iframe src={videosrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
export default ViewVideo
