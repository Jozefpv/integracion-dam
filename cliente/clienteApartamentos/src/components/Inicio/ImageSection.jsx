import mapa from "./images/volcan.jpg"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ImageSection = () => {
    return (
        <div style={{height:"100%", display:"flex", alignContent:"center", justifyContent:"center", alignItems:"center"}}>
            <img src={mapa} style={{width:"550px", borderRadius:"10px", border:"2px solid white"}}/>
        </div>
        // <MapContainer center={[28.6731, -17.8558]} zoom={12} style={{ border:"2px solid white",height: "100%", borderRadius:"10px" }}>
        //     <TileLayer
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //         attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"
        //     />
        //     <Marker position={[28.683684, -17.948625]}>
        //         <Popup>
        //             Casa de vacaciones Yoya
        //         </Popup>
        //     </Marker>
        //     <Marker position={[28.700251, -17.942900]}>
        //         <Popup>
        //             Villa Era
        //         </Popup>
        //     </Marker>
        //     <Marker position={[28.728728, -17.965662]}>
        //         <Popup>
        //             Villa Cameleon
        //         </Popup>
        //     </Marker>
        //     <Marker position={[28.648290, -17.873882]}>
        //         <Popup>
        //             Villa Orion
        //         </Popup>
        //     </Marker>
        //     <Marker position={[28.68479685517039, -17.934221942016496]}>
        //         <Popup>
        //             Casa de vacaciones Pedro
        //         </Popup>
        //     </Marker>
        //     <Marker position={[28.72851953047388, -17.968643349462567]}>
        //         <Popup>
        //             Villa la hoya
        //         </Popup>
        //     </Marker>
        //     <Marker position={[28.655674, -17.895990]}>
        //         <Popup>
        //         La casa de vacaciones Victoria
        //         </Popup>
        //     </Marker>
        //     <Marker position={[28.704637039762993, -17.945980000003768]}>
        //         <Popup>
        //         Casa de vacaciones Alma
        //         </Popup>
        //     </Marker>
        // </MapContainer>
        
    )
}

export default ImageSection