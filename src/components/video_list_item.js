import React from 'react';

// var puke = (obj) => {
//   return <pre>{JSON.stringify(obj, null, ' ')}</pre>
// }

let style = {
  li: {
    cursor: 'pointer'
  }
}

const VideoListItem = ({video, onVideoSelect}) =>{
  // const video = props.video //sicen video is repeated can be avoid by {video} instead props.video

  const videoData = video.snippet;
  const imageUrl = videoData.thumbnails.default.url


  return(
    <li onClick={()=> onVideoSelect(video)} className="list-group-item" style={style.li}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{videoData.title}</div>
      </div>
    </li>
  )
}

export default VideoListItem
