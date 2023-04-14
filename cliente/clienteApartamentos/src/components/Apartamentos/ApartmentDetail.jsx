import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import imagenesDetail from "./data/imagenesDetail"
import Carousel from 'react-bootstrap/Carousel';
import './styleCarrusel.css'
import Formulario from "./Formulario";
import { MdLocationOn } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { MdNightlight } from 'react-icons/md';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const ApartmentDetail = () => {
    const [informacion, setInformacion] = useState()
    const [fechas, setFechas] = useState()
    const [index, setIndex] = useState(0)
    const { id } = useParams()
    const [like, setLike] = useState(localStorage.getItem(`like-${id}`) === 'true')
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

    useEffect(() => {
        localStorage.setItem(`like-${id}`, like)
    }, [like])

    const clickDecrementarLikes = async () => {
        setLike(false)
        const data = { }
        try {
            const response = await fetch(
                `http://localhost:3003/apartamentos/${id}/removelike`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();
            console.log(result)

        } catch (error) {
            console.error(error);
        }
    }
    const clickIncrementarLikes = async () => {
        setLike(true)
        const data = {
            id: id
        }
        console.log("estoy pronado eso")
        try {
            const response = await fetch(
                `http://localhost:3003/apartamentos/${id}/addlike`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();
            console.log(result)

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ padding: '3%' }}>
            {informacion && (
                <div>
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
                                <p><MdLocationOn size={20} /> Dirección: {informacion.direccion}</p>
                                <p><MdNightlight size={15} /> Precio noche: {informacion.precio_noche}€</p>
                                <p><FaUser size={15} /> Personas: {informacion.num_personas_max}</p>
                                <p><AiFillHeart size={15} /> {informacion.likes}</p>
                                <p>{like === true ? <AiFillHeart size={25} style={{ cursor: "pointer" }} onClick={clickDecrementarLikes} /> : <AiOutlineHeart size={25} style={{ cursor: "pointer" }} onClick={(e => clickIncrementarLikes(e))} />}</p>

                            </div>
                        </div>
                        <Formulario id={id} fechas={fechas} />
                    </div>
                    <div style={{ width: "100%" }}>
                        <h5 style={{ textAlign: "center" }}>posibles reseñas</h5>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ApartmentDetail