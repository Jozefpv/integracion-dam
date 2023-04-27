import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
function Cancelar() {
    const [idReserva, setIdReserva] = useState()
    const [informacion, setInformacion] = useState(false)
    const { id } = useParams()


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            id_reserva: idReserva
        }

        
        console.log("id del aparta", id)
        console.log(data)
    }

    return (
        <div style={{ padding: "3%", gap: "20px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h3>Cancela tu reserva</h3>
            <Form style={{ width: '20%' }} onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicIdReserva">
                    <Form.Label>Introduce el código de reserva:</Form.Label>
                    <Form.Control required type="text" placeholder="Código..." value={idReserva} onChange={e => setIdReserva(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicReserva">
                    <Button type='submit'>Siguiente</Button>
                </Form.Group>
            </Form>
            {informacion && (
                <div></div>
            )}
        </div >
    )
}

export default Cancelar