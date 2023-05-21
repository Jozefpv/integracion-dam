import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReservaDetail from './ReservaDetail';
function Cancelar() {
    const [idReserva, setIdReserva] = useState("")
    const [informacion, setInformacion] = useState(false)
    const [infoReser, setInfoReser] = useState(false)
    const [cancelada, setCancelada] = useState(false)

    const { id } = useParams()


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            id_reserva: idReserva.trim()
        }
        try {
            infoReserva(id)
            infoApartamento(id)
        } catch (error) {
            console.error(error);
        }


        console.log("id del aparta", id)
        console.log(data)
    }

    const infoApartamento = async (id) => {
        const data = await fetch(`http://localhost:3003/apartamentos/${id}`)
        const datos = await data.json()
        setInformacion(datos.apartamento)
    }

    const infoReserva = async (id) => {
        try {
            const data = {
                id_reserva: idReserva.trim()
            }
            const response = await fetch(
                `http://localhost:3003/cancelar/${id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );
            const estado = await response.status;
            const info = await response.json()
            if (estado === 404) {
                alert(info.mensaje)
            }
            else if (estado === 500) {
                alert(info.mensaje)
            }
            else if (estado === 200) {
                setInfoReser(info)
            }

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div style={{ padding: "3%", gap: "20px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h3>Cancela tu reserva</h3>
            <Form style={{ width: '20%' }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicIdReserva">
                    <Form.Label>Introduce el código de reserva:</Form.Label>
                    <Form.Control required type="text" placeholder="Código..." value={idReserva} onChange={e => setIdReserva(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicReserva">
                    <Button type='submit'>Siguiente</Button>
                </Form.Group>
            </Form>
            {cancelada ? (
                <p>¡Reserva cancelada con éxito!</p>
            ) : (
                infoReser && (
                    <ReservaDetail set={setCancelada} codigo={idReserva} reserva={infoReser} apartamento={informacion} />
                )
            )}
        </div>
    )
}

export default Cancelar