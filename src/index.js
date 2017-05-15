
console.log("GLUETUBE ON FIRE...");

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import apiKey from '../api_key';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// import AutoCompleteExampleSimple from './components/ganey';

// const API_KEY = process.env.API_KEY;
const API_KEY = apiKey.key;
// console.log(apiKey);
// console.log(API_KEY);



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
    };
    this.videoSearch('GNR')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState(
        //{videos} is same as {videos: videos} if the dataThatCameBack is set as same name as key
        {
          videos: videos,
          selectedVideo: videos[0]
        }
      )
    })
  }

  render(){
    const videoSearch = _.debounce(term => this.videoSearch(term), 300)

    return (
      <div>
          <div className="logo-container text-center"><img src="../Logo.png" /></div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <div >
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'))
