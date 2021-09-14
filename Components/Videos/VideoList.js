import VideoItems from "./VideoItems.js"
const VideoList =({videos,handleVideoSelect})=>{
  const renderedVideos=videos.map((video)=>{

     return <VideoItems key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
  })
  return(
    <div className="ui relaxed divided list">
       {renderedVideos}
    </div>
  )
}
export default VideoList
