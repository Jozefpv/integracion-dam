import { useEffect, useState } from "react"
import Apartment from "./Apartment"
import { Link } from "react-router-dom"
import './styleListApartments.css'
import imagenes from "./data/imagenes"

const ListApartments = () => {

    const [apartment, setApartment] = useState([])

    useEffect(() => {

        fetch('http://localhost:3003/')
            .then(res => res.json())
            .then(data => {
                return setApartment(data)
            })

    }, [])

    return (
        <>
            <div style={{ backgroundColor: '#f4fafc', height: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', padding: '15px', justifyContent: 'center' }}>
                {apartment.map((item) => {
                    return (
                        <div className="listApartmentText">
                            <Link to={`/apartamentos/${item._id}`} style={{ textDecoration: 'none', cursor: 'pointer', color: 'black', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Apartment foto={imagenes[item._id]} info={item} />
                            </Link>
                        </div>
                    )
                }
                )
                }
            </div >
        </>
    )
}

export default ListApartments