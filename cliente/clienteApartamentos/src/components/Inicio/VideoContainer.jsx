import "./styleVideoContainer.css"
import videolp from "./video/videolp.mp4";
const VideoContainer = () => {

    return (
        <div className="videoContainer">
            <div className="divTapa"></div>
            <video className="video" loop autoPlay muted src={videolp} />
        </div>
    )
}

export default VideoContainer