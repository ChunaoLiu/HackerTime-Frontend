import React, {useState} from 'react'
import "./Videochat.css";
import VideoOff from "../assets/video-off.svg";
import VideoIcon from "../assets/video.svg";
import MicOff from "../assets/mic-off.svg";
import MicIcon from "../assets/mic.svg";

const Videochat = () => {
    
    const stream = true;

    
    const callAccepted = true;
    const callEnded = true;
    const userVideo = true; // ref
    const myVideo   = true; // ref

    const name = 'A(You)';
    const userName = 'B';

    


    const [userVdoStatus, setUserVdoStatus] = useState(true);
    const [userMicStatus, setUserMicStatus] = useState(true);
    const [myVdoStatus, setMyVdoStatus] = useState(true);
    const [myMicStatus, setMyMicStatus] = useState(true);

    const fullScreen = () => {
        return false;
    }
    return (
        <div className="grid">
      {stream ? (
        <div
          style={{ textAlign: "center" }}
          className="card"
          id={callAccepted && !callEnded ? "video1" : "video3"}
        >
          <div style={{ height: "2rem" }}>
            <h3>{name}</h3>
          </div>
          <div className="video-avatar-container">
            <video
              playsInline
              muted
              onClick={fullScreen}
              autoPlay
              className="video-active"
              style={{
                opacity: `${myVdoStatus ? "1" : "0"}`,
              }}
            />
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

      { userVideo && (
        <div className="card2" style={{ textAlign: "center" }} id="video2">
          <div style={{ height: "2rem" }}>
            <h3>{userName}</h3>
          </div>

          <div className="video-avatar-container">
            <video
              playsInline             
              onClick={fullScreen}
              autoPlay
              className="video-active"
              style={{
                opacity: `${userVdoStatus ? "1" : "0"}`,
              }}
            />
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
    )

}

export default Videochat;