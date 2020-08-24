import React from "react"

const VideoDetail = ({video}) => {
    if(!video)
    {    return <div>
        
    </div>
    }
    else {
        return <div>
        <div class="embed-responsive embed-responsive-4by3 ">
        <iframe className="embed-responsive-item"  src={"https://www.youtube.com/embed/"+video.id.videoId} allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"/>

        </div>
        
        <div className="">
            <h4 className="ui">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
        </div>
    }
}

export default VideoDetail