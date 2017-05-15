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
  const ganey = () =>{
    alert("ganey");
  }

  if(!video){
    // setTimeout(() => alert("ganey"), 3000)
    // console.log(this);

    // const loadHour = _.debounce(ganey, 3000)

    return (<div className="loadStyle col-sm-offset-4 col-md-4"><div className="text-center">Loading!!</div>
        <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
    </div>)
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
