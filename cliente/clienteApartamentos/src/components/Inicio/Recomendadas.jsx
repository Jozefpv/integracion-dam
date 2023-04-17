import Container from "react-bootstrap/Container";
import './styleRecomendadas.css'
import { useState, useEffect } from "react";
import imagenes from "./data/imagenes"
import Apartment from "../Apartamentos/Apartment"
import { Link } from "react-router-dom"
import uniqid from 'uniqid';

const Recomendadas = () => {

    const [apartment, setApartment] = useState([])

    useEffect(() => {

        fetch('http://localhost:3003/')
            .then(res => res.json())
            .then(data => {
                data.sort(mostLike())
                const newArray = data.slice(0, 3);

                setApartment(newArray)
            })

    }, [])

    function mostLike() {
        return function (elem1, elem2) {
          if (elem1.likes > elem2.likes) {
            return -1;
          } else if (elem1.likes < elem2.likes) {
            return 1;
          } else {
            return 0;
          }
        };
      }

    return (
        <Container
            style={{
                minWidth: "100%",
                height: "100%",
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(204,204,204,1) 100%, rgba(216,225,227,1) 100%)",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
            }}
        >
            <div style={{ width: "100%", height: "100%", paddingTop:"40px"}}>
                <h5 className="titleRecomendadas">CASAS RECOMENDADAS</h5>
                <div style={{backgroundColor: '', height: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '15px', justifyContent: 'center', gap:"30px"}}>
                    {apartment.map((item) => {
                        return (
                            <div key={uniqid()}>
                                <Link to={`/apartamentos/${item._id}`} style={{ textDecoration: 'none', cursor: 'pointer', color: 'black', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Apartment foto={imagenes[item._id]} info={item} />
                                </Link>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </Container>

    )
}

export default Recomendadas