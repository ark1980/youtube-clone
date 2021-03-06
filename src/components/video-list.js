import React from "react";
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  return (
    <div>
      <ul className="col-md-4 list-group">
        {
          props.videos.map(video => {
            return <VideoListItem 
              key={video.etag} 
              video={video} 
              onSelectedVideo={props.onSelectedVideo} />
          })
        }
      </ul>
    </div>
  )
}

export default VideoList;