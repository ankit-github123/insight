import React from "react"
import VideoItem from "./VideoItem"
const VideoList = ({videos,onSelectedVideo}) => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
  const videosList =  videos.map((video)=> {
        return <VideoItem key={video.id.videoId} onSelectedVideo={onSelectedVideo} video={video}/>
    })
    return <div className="ui list">
        {videosList}
    </div>
}

export default VideoList