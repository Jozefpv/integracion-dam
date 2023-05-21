import React from 'react'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


const ReservaDetail = (props) => {

    const fechaEntrada = props.reserva.fecha_inicio
    const fechaSalida = props.reserva.fecha_fin
    const fechaEntradaFormateada = moment(fechaEntrada).format('DD/MM/YYYY');
    const fechaSalidaFormateada = moment(fechaSalida).format('DD/MM/YYYY');
    const { id } = useParams()


    const handleCancelar = async () => {
        try {
            const data = {
                id_reserva : props.codigo
            }
            const response = await fetch(
                `http://localhost:3003/cancelar/done/${id}`,
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
            if(estado===404){
                alert(info.mensaje)
            }
            else if(estado === 200){
                console.log(info.mensaje)
                props.set(prevState => !prevState)
            }

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "5px", display:"flex", flexDirection:"column", alignItems :"center" }}>
            <p>Reserva en {props.apartamento.nombre} desde el {fechaEntradaFormateada} al {fechaSalidaFormateada} ¿Desea cancelar la reserva?</p>
            <Button onClick={handleCancelar} variant="danger" type="submit" style={{width:"90px"}} >
                Cancelar
            </Button>

        </div>

    )
}

export default ReservaDetail