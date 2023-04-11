import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import imagenesDetail from "./data/imagenesDetail"
import Carousel from 'react-bootstrap/Carousel';
import './styleCarrusel.css'
import Formulario from "./Formulario";

const ApartmentDetail = () => {
    const [informacion, setInformacion] = useState()
    const [fechas, setFechas] = useState()
    const [index, setIndex] = useState(0)
    const { id } = useParams()
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        fetch(`http://localhost:3003/apartamentos/${id}`)
            .then(res => res.json())
            .then(data => {
                setInformacion(data.apartamento)
                setFechas(data.fechasReservas)
            })
    }, [])




    return (
        <div style={{ padding: '3%' }}>
            {informacion && (
                <div style={{ display: 'flex', gap: '100px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }} className="carruselContainer">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {imagenesDetail[id].map((imagen, i) => (
                                <Carousel.Item key={i} className="carousel-item">
                                    <img
                                        className="carousel-img"
                                        style={{ borderRadius: "10px" }}
                                        src={imagen}
                                        alt={`Imagen ${i}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <div>
                            <h3>{informacion.nombre}</h3>
                            <p>Dirección: {informacion.direccion}</p>
                            <p>Precio noche: {informacion.precio_noche}€</p>
                        </div>
                    </div>

                    <Formulario id={id} fechas={fechas}/>
                    


                </div>
            )}
        </div>
    )
}

export default ApartmentDetail