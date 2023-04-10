const express = require('express')
const router = express.Router()
const { Reserva, Apartamento } = require('../models/apartamento')
const moment = require('moment');

router.get('/', async (req, res) => {
    const apartamentos = await Apartamento.find()
    res.json(apartamentos)
})

router.get('/apartamentos/:id', async (req, res) => {
    try {
        const apartamento = await Apartamento.findById(req.params.id).populate('reservas')
        res.status(200).json(apartamento)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al obtener las reservas' })
    }
})

router.post('/', async (req, res) => {
    const apartamentos = new Apartamento({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        precio_noche: req.body.precio_noche,
        descripcion: req.body.descripcion,
        num_personas_max: req.body.num_personas_max
    })
    await apartamentos.save()

    res.json({ status: 'Apartamento guardado' })

})

router.post('/apartamentos/:id/reservas', async (req, res) => {
    try {
        const apartamento = await Apartamento.findById(req.params.id).populate('reservas')
        const reservas = apartamento.reservas

        const fechaInicioRecibida = moment(req.body.fecha_inicio);
        const fechaFinRecibida = moment(req.body.fecha_fin);

        let seSolapan = false;

        reservas.forEach(reserva => {
            const reservaInicio = moment(reserva.fecha_inicio);
            const reservaFin = moment(reserva.fecha_fin);

            if (fechaInicioRecibida.isBetween(reservaInicio, reservaFin, undefined, '[]')
                || fechaFinRecibida.isBetween(reservaInicio, reservaFin, undefined, '[]')
                || reservaInicio.isBetween(fechaInicioRecibida, fechaFinRecibida, undefined, '[]')
                || reservaFin.isBetween(fechaInicioRecibida, fechaFinRecibida, undefined, '[]')) {
                seSolapan = true;
            }
        })

        if (seSolapan) {
            console.log("si se solapan")
            res.status(409).json({ mensaje: 'Se solapa con alguna reserva' })
        }else{
            console.log("no se solapan")
            res.status(201).json({ mensaje: 'NO SE solapa con alguna reserva' })
            const reserva = new Reserva({
                id_reserva: req.body.id_reserva,
                fecha_inicio: req.body.fecha_inicio,
                fecha_fin: req.body.fecha_fin,
                cliente: {
                    nombre: req.body.cliente.nombre,
                    apellido: req.body.cliente.apellido,
                    email: req.body.cliente.email,
                    telefono: req.body.cliente.telefono
                }
            })
            apartamento.reservas.push(reserva)
    
            await reserva.save()
            await apartamento.save()
        }



       

        
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear la reserva' })
    }
})

module.exports = router