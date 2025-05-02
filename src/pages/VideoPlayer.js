import react from "react";
import React, { useRef, useEffect } from 'react';
import video from "../video/satisfia.mp4"
import ReactPlayer from 'react-player/lazy'
const VideoPlayer = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {

    }
    }, []);
    
    return (
        <video ref={videoRef} >
        <source src={video} type="video/mp4" controls  />
        </video>
    );
};

export default VideoPlayer;












// import VideoJS from 'react-video-js-player'
// import Plyr from 'plyr-react'; 
// import 'plyr-react/plyr.css';

// import React, { useRef, useEffect } from 'react';
// import video from "../video/satisfia.mp4";

// const VideoPlayer = () => {
//   const videoRef = useRef();

//   useEffect(() => {
//     if (videoRef.current) {
//     }
//   }, []);
//   return (
//     <video ref={videoRef}  >
//       <source src={video} type="video/mp4" controls autoplay />
//     </video>
//   );
// };

// export default VideoPlayer;

















