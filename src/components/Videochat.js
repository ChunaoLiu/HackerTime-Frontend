import React, {useState, useEffect, useRef, useContext} from 'react'
import "./Videochat.css";
import Webcam from "react-webcam";
import VideoOff from "../assets/video-off.svg";
import VideoIcon from "../assets/video.svg";
import MicOff from "../assets/mic-off.svg";
import MicIcon from "../assets/mic.svg";
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

import { SocketContext } from '../Context';

const Videochat = (props) => {

    console.log(SocketContext);
    const { callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const name = '123';
    console.log(name);

    // useEffect(() => {
    //   // We first want permission to use the video and audio from user's camera and microphone
    //   navigator.mediaDevices
    //     .getUserMedia({ video: true, audio: true })
    //     .then((currentStream) => {
    //       setStream(currentStream);
    //       // we immediately want to populate the video iframe with src of our screen
    //       myVideo.current.srcObject = currentStream;
    //     });
  
    //   // listen for a specific action
    //   socket.on('me', (id) => setMe(id));
  
    //   socket.on('callUser', ({ from, name: callerName, signal }) => {
    //     setCall({ isReceivingCall: true, from, name: callerName, signal });
    //   });
    // }, []);

    const [userVdoStatus, setUserVdoStatus] = useState(true);
    const [userMicStatus, setUserMicStatus] = useState(true);
    const [myVdoStatus, setMyVdoStatus] = useState(true);
    const [myMicStatus, setMyMicStatus] = useState(true);

    const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const [collapse, setCollapse] = useState(false);

    const fullScreen = () => {
        return false;
    }

    const initial = (e) => {
        
      let resizable = document.getElementById('Resizable_video');
      
      setInitialPos(e.clientX);
      setInitialSize(resizable.offsetWidth);
      
    }
    
    const resize = (e) => {
        
        let resizable = document.getElementById('Resizable_video');
         resizable.style.right = '10px'
        // resizable.style.left = `${parseInt(e.clientX)}px`
        if(e.clientX > 0)
          resizable.style.width = `${parseInt(initialSize) + parseInt(initialPos - e.clientX )}px`;
        if(parseInt(resizable.style.width) < 210)
          resizable.style.width = '210px'
        if(parseInt(resizable.style.width) > 400)
          resizable.style.width = '400px'

      }

    const hide = (e) => {
        
        let resizable = document.getElementById('Resizable_video');
        if(collapse) {
            document.getElementById('Resizable_video').style.display = 'inline'
            resizable.style.width = `300px`;
        }
        else {
            resizable.style.width = `0px`;
            document.getElementById('Resizable_video').style.display = 'none'
        }

        setCollapse(!collapse)
    }
    return (
        <div className="grid " >
          <div id = 'Draggable_video'
                draggable   = 'true'
                onDragStart = {initial} 
                onDrag      = {resize}
                onClick     = {hide}
          />

          <div id = 'Resizable_video'>
          {stream ? (
            <div
              style={{ textAlign: "center", width:"100%" }}
              className="card  col-lg-12"
              id={callAccepted && !callEnded ? "video1" : "video3"}
            >
              <div style={{ height: "2rem" }}>
                <h3>{name}</h3>
              </div>
              <div className="video-avatar-container">
                <Webcam
                  playsInline
                  muted
                  onClick={fullScreen}
                  ref={myVideo}
                  autoPlay
                  className="video-active"
                  style={{
                    opacity: `${myVdoStatus ? "1" : "0"}`,
                  }}
                />
                {/* <Webcam 
                  // playsInline
                  // muted
                  // onClick={fullScreen}
                  // autoPlay
                  className="video-active"
                  style={{
                    opacity: `${userVdoStatus ? "1" : "0"}`,
                  }}
                /> */}
              </div>

          <div className="iconsDiv">
            <div className="icons" onClick={() => setMyVdoStatus(!myVdoStatus)} tabIndex="0">
              {myVdoStatus ? (
                <img src={VideoIcon} alt="video on icon" />
              ) : (
                <img src={VideoOff} alt="video off icon" />
              )}
            </div>
            <div
              className="icons"
              onClick={() => {
                setMyMicStatus(!myMicStatus)
              }}
              tabIndex="0"
              >
                {myMicStatus ? (
                  <img src={MicIcon} alt="mic on icon" />
                ) : (
                  <img src={MicOff} alt="mic off icon" />
                )}
            </div>      

            
          </div>
        </div>
      ) : (
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div className='mt-5'/>

      { callAccepted && !callEnded &&  (
        <div className="card col-lg-12" style={{ textAlign: "center" }} id="video2">
          <div style={{ height: "2rem" }}>
            <h3>{call.name || 'Name'}</h3>
          </div>

          <div className="video-avatar-container">
          <Webcam 
              // playsInline
              // muted
              // onClick={fullScreen}
              // autoPlay
              ref={userVideo}
              className="video-active"
              style={{
                opacity: `${userVdoStatus ? "1" : "0"}`,
                height : 'auto'
              }}
            />
            {/* <video playsInline ref={userVideo} autoPlay className={classes.video} /> */}
          </div>
          <div className="iconsDiv">
            <div className="icons" onClick={() => setUserVdoStatus(!userVdoStatus)} disabled tabIndex="0">
              {userVdoStatus ? (
                <img src={VideoIcon} alt="video on icon" />
              ) : (
                <img src={VideoOff} alt="video off icon" />
              )}
            </div>
            <div
              className="icons"
              onClick={() => {
                setUserMicStatus(!userMicStatus)
              }}
              disabled
              tabIndex="0"
            >
              {userMicStatus ? (
                <img src={MicIcon} alt="mic on icon" />
              ) : (
                <img src={MicOff} alt="mic off icon" />
              )}
            </div>            
          </div>
        </div>
      )}
          </div>



    </div>
    )

}

export default Videochat;