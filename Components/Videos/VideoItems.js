import "./VideoItem.css"
const VideoItems=({video,handleVideoSelect})=>{
  return(
    <div className="video-item item" onClick={() => handleVideoSelect(video)}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
        <div className='content'>
              <div className='header '>{video.snippet.title}</div>
          </div>
    </div>
  )
}
export default VideoItems
