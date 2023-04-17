import { useEffect, useState } from "react"
import Apartment from "./Apartment"
import { Link } from "react-router-dom"
import './styleListApartments.css'
import imagenes from "./data/imagenes"
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';

const ListApartments = () => {

    const [apartment, setApartment] = useState([])

    useEffect(() => {

        fetch('http://localhost:3003/')
            .then(res => res.json())
            .then(data => {
                return setApartment(data)
            })

    }, [])

    const handleChangeValue = (event) => {
        if (event.target.value === "1") {
            setApartment([...apartment].sort(lowPriceSort()))
        } else if(event.target.value === "2") {
            setApartment([...apartment].sort(highPriceSort()))
        } else if(event.target.value === "3"){
            setApartment([...apartment].sort(mostLike()))
        } else if(event.target.value === "4"){
            setApartment([...apartment].sort(leastLike()))
        }
    }


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

    function leastLike() {
      return function (elem1, elem2) {
        if (elem1.likes < elem2.likes) {
          return -1;
        } else if (elem1.likes > elem2.likes) {
          return 1;
        } else {
          return 0;
        }
      };
    }

    function lowPriceSort() {
        return function (elem1, elem2) {
          if (elem1.precio_noche < elem2.precio_noche) {
            return -1;
          } else if (elem1.precio_noche > elem2.precio_noche) {
            return 1;
          } else {
            return 0;
          }
        };
      }

      function highPriceSort() {
        return function (elem1, elem2) {
          if (elem1.precio_noche > elem2.precio_noche) {
            return -1;
          } else if (elem1.precio_noche < elem2.precio_noche) {
            return 1;
          } else {
            return 0;
          }
        };
      }

    return (
        <div style={{ backgroundColor: '#f4fafc' }}>
            <div style={{ padding: "15px", width: "100%", display: "flex", justifyContent: "end" }}>
                <Form.Select aria-label="Default select example" style={{ width: "200px"}} onChange={handleChangeValue}>
                    <option>Ordenador por...</option>
                    <option value="1">Precio menor</option>
                    <option value="2">Precio mayor</option>
                    <option value="3">Más gustadas</option>
                    <option value="4">Menos gustadas</option>
                </Form.Select>
            </div>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', padding: '15px', justifyContent: 'center' }}>
                {apartment.map((item) => {
                    return (
                        <div key={uniqid()} className="listApartmentText">
                            <Link to={`/apartamentos/${item._id}`} style={{ textDecoration: 'none', cursor: 'pointer', color: 'black', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Apartment foto={imagenes[item._id]} info={item} />
                            </Link>
                        </div>
                    )
                }
                )
                }
            </div >
            
        </div>
    )
}

export default ListApartments