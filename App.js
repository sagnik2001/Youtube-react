import React from "react"
import {useState,useEffect} from "react"
import youtube from "./ApiCalls/ApiCall.js"
import SearchBar from "./Components/SearchBar.js"
import ViewVideo from "./Components/ViewVideo.js"
import VideoList from "./Components/Videos/VideoList.js"

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
       this.setState({selectedVideo: video})

   }

   async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&key=AIzaSyBwWwp7t9hkXg4JsgpufNZM81iAKJQGYTo&videoId=${this.state.selectedVideo.id.videoId}`);
    const data = await response.json();
    console.log(data);

}

    render(){
  return (
    <div className='ui container' style={{marginTop: '1em'}}>
     <SearchBar handleFormSubmit={this.handleSubmit}/>
     <div className='ui grid'>
                <div className="ui row">
                    <div className="eleven wide column">
                        <ViewVideo video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                             <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                         </div>
              </div>
              </div>
     </div>
  );
}
}

export default App;
