import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './styletest.css'
import emailjs from '@emailjs/browser';

const Formulario = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaEntrada, setFechaEntrada] = useState(null);
    const [fechaSalida, setFechaSalida] = useState(null);

    const excludeDates = []
    props.fechas.map(item => excludeDates.push(new Date(item)))

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            id_reserva: 1,
            fecha_inicio: fechaEntrada,
            fecha_fin: fechaSalida,
            cliente: {
                nombre: nombre,
                apellido: apellidos,
                email: email,
                telefono: telefono
            }
        }

        try {
            const response = await fetch(
                `http://localhost:3003/apartamentos/${props.id}/reservas`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );
            const reserva = await response.json();
            console.log(reserva)

            console.log(props.apartamento)

            const templateParams = {
                email: email,
                apartamento: props.apartamento,
                fecha_entrada: fechaEntrada.toLocaleDateString(),
                fecha_salida: fechaSalida.toLocaleDateString(),
                nombre: nombre
            };
            const emailjsResponse = await emailjs.send(
                'service_f7bvo1g',
                'template_ubo6jhh',
                templateParams,
                'sM-duookX9T8Am2ll'
            );
            console.log(emailjsResponse)

            setNombre('')
            setApellidos('')
            setEmail('')
            setTelefono('')
            setFechaEntrada(null)
            setFechaSalida(null)

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Form style={{ width: '40%' }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control required type="text" placeholder="Nombre..." value={nombre} onChange={(event) => setNombre(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicApellidos">
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control required type="text" placeholder="Apellidos..." value={apellidos} onChange={(event) => setApellidos(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control required type="email" placeholder="Email..." value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelefono">
                <Form.Label>Teléfono:</Form.Label>
                <Form.Control required type="text" placeholder="Teléfono..." value={telefono} onChange={(event) => setTelefono(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFechaEntrada">
                <Form.Label>Fecha de entrada:</Form.Label>
                <DatePicker
                    className='testform'
                    selected={fechaEntrada}
                    onChange={e => setFechaEntrada(e)}
                    selectsStart
                    startDate={fechaEntrada}
                    endDate={fechaSalida}
                    excludeDates={excludeDates}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecciona una fecha"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFechaSalida">
                <Form.Label>Fecha de salida:</Form.Label>
                <DatePicker
                    className='testform'
                    selected={fechaSalida}
                    onChange={e => setFechaSalida(e)}
                    selectsEnd
                    startDate={fechaEntrada}
                    endDate={fechaSalida}
                    excludeDates={excludeDates}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecciona una fecha"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Reservar
            </Button>
        </Form>

    )
}

export default Formulario