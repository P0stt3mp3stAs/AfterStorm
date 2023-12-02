import React from 'react';
import { video } from "../../assets";
import "./VideoLoop.css";

const VideoLoop = () => {
  return (
    <div className="video-container">
      <video src={video} autoPlay loop muted className="video-element">
        {/* <source src={video1} type="video/quicktime" />
        Your browser does not support the video tag. */}
      </video>
    </div>
  );
};

export default VideoLoop;