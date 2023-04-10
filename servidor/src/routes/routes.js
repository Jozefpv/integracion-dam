const express = require('express')
const router = express.Router()
const { Reserva, Apartamento } = require('../models/apartamento')

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
        const fechas = reservas.map(e => console.log("--", e.fecha_inicio))

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

        res.status(201).json(reserva)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear la reserva' })
    }
})

module.exports = router