import React from 'react';
import _ from 'lodash';

let style = {
  heading: {
    fontSize: '21px'
  },
  info:{
    fontSize: '14px'
  }
}

var puke = (obj) => {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

const VideoDetail = ({video}) =>{

  if(!video){
    return <div>Loading!!</div>
  }

  const videoData = video.snippet;
  const url = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div style={style.heading}>{videoData.title}</div>
        <div style={style.info}>{videoData.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
