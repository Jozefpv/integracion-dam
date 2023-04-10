import './styleApartment.css'
import { FaUser } from 'react-icons/fa';
import { MdNightlight } from 'react-icons/md';


const Apartment = (props) => {

    return (
        <div className='containerApartment'>
            <img className='test' src={props.foto}></img>
            <div style={{padding: '10px'}}>
                <h5>{props.info.nombre}</h5>
                <p style={{color:'#6b6b6b', margin:'0'}}>{props.info.direccion}</p>
                <div style={{display:'flex', flexDirection:'row', gap: '5px', alignItems:'center', padding:'0', margin:'0'}}>
                    <FaUser size={15}/>
                    <p style={{ marginTop:'15px'}}>{props.info.num_personas_max} personas</p>
                    <MdNightlight size={15} style={{marginLeft:'20px'}} />
                    <p style={{ marginTop:'15px'}}>{props.info.precio_noche}€ /noche </p>

                </div>
            </div>
        </div>
    )
}

export default Apartment