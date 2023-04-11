import "./styleVideoContainer.css"
import videolp from "./video/videolp.mp4";
const VideoContainer = () => {

    return (
        <div className="videoContainer">
            <div style={{ position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: "10", display:"flex", justifyContent:"center", alignItems:"end", minHeight:"70%" }}>
                <p className="textoTitleInicio">ALOJAMIENTO EN LA ISLA BONITA</p>
            </div>
            <div className="divTapa"></div>
            <video className="video" loop autoPlay muted src={videolp} />
        </div>
    )
}

export default VideoContainer