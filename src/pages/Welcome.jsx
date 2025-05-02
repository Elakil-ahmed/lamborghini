import React from "react";
import video from "../video/satisfia.mp4";
import ReactPlayer from 'react-player/lazy';
import VideoPlayer from 'react-video-js-player';

const Video = () => {
    return (
        <>
            <h1 className="text-primary">WELCOME TO THE RICH</h1>
            <div>
                <video src={video} controls autoPlay />
            </div>

        
            

        </>
    );
}

export default Video;






// import Plyr from 'plyr-react';
// import video from "./VideoPlayer";
// import ReactPlayer from 'react-player';
// import Plyr from 'plyr-react';
// import VideoPlayer from 'react-video-js-player';
// import ReactPlayer from 'react-player/lazy'