import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/YouTube'
import VideoList from './VideoList'
//Class based componed because its holding state for entire application 

class App extends React.Component{
  state = { 
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params:{
        q: term
      }
    });
    this.setState({ videos: response.data.items})
  };

  onVideoSelect = (video) => {
    console.log('from the app! ' , video);
  };

  render(){
    return (
      <div className="ui container"> 
        <SearchBar onTermSubmit={this.onTermSubmit} /> 
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    );
  }
};

export default App;