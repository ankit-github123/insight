import React, { Component } from "react"
import SearchBar from "./SearchBar"
import VideoDetail from "./VideoDetail"
import axios from "axios"
import VideoList from "./VideoList"
class YoutubeMain extends Component  {

    state={videos:[],selectedVideo:null}
    componentDidMount() {
        this.onTermSubmit("fun videos")
    }
    onTermSubmit = async (term) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                q:term || "positive",
                key:'AIzaSyCoOcFY91j60nCxzjmAdK8UqaTl83R4Xvw',
                part:'snippet',
                maxResults:12
            }
        })
        this.setState({videos:response.data.items,selectedVideo:response.data.items[1]});
        console.log(response.data.items);
    }
    onSelectedVideo = (video) => {
        this.setState({selectedVideo:video})
    }
    render() {
    return <div>
        <SearchBar onsubmit = {this.onTermSubmit}/>
        <div className="container-fluid row">
        
            <div className="col-lg-8 col-md-7">
                <VideoDetail video={this.state.selectedVideo}/>
            </div>
            
            <div className="col-lg-4 col-md-5">
                <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos}/>
            </div>
            <div className="col-lg-1">
                
            </div>
            
        </div>
    </div>
}
}

export default YoutubeMain