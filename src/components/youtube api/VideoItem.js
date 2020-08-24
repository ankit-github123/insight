import React from "react"

const VideoItem = ({video,onSelectedVideo}) => {
    const imgURL = video.snippet.thumbnails.default.url;
    return <div onClick={()=> onSelectedVideo(video)} className="item video-item">
    <img className="" src = {imgURL} />
    <div className="content" style={{padding:"5px"}}>
        <div className="video-title">
           <h5> {video.snippet.title}</h5>
       </div>
            <p className="video-time">{video.snippet.publishedAt.slice(0, 11)}</p>
       </div>
    </div>
}
export default VideoItem