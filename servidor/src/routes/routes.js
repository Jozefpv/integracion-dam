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
        const fechasReservas = []

        apartamento.reservas.forEach((reserva) => {
            const fechaInicio = moment(reserva.fecha_inicio)
            const fechaFin = moment(reserva.fecha_fin)
            const diffDays = fechaFin.diff(fechaInicio, 'days')
            for (let i = 0; i <= diffDays; i++) {
                fechasReservas.push(moment(fechaInicio).add(i, 'days').format('YYYY-MM-DD'))
            }
        })

        res.status(200).json({
            apartamento: apartamento,
            fechasReservas: fechasReservas
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al obtener las reservas' })
    }
})

router.post('/cancelar/:id', async (req, res) => {
    try {
        const apartamento = await Apartamento.findById(req.params.id).populate('reservas')
        const reserva = apartamento.reservas.find(r => r.id_reserva === req.body.id_reserva)
        if (!reserva) {
          res.status(404).json({ mensaje: 'La reserva no existe para este apartamento' })
          return
        }
        res.status(200).json(reserva)
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar la reserva' })
      }

})


router.post('/', async (req, res) => {
    const apartamentos = new Apartamento({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        precio_noche: req.body.precio_noche,
        descripcion: req.body.descripcion,
        num_personas_max: req.body.num_personas_max,
        likes: req.body.likes
    })
    await apartamentos.save()
    res.json({ status: 'Apartamento guardado' })

})

router.post('/apartamentos/:id/addlike', async(req, res) => {
    try {
        const apartamento = await Apartamento.findById(req.params.id)
        apartamento.likes++
        await apartamento.save()    
        res.json({ message: 'Like actualizado correctamente', apartamento });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el like' });
    }
})

router.post('/apartamentos/:id/removelike', async(req, res) => {
    try {
        const apartamento = await Apartamento.findById(req.params.id)
        if(apartamento.likes>0){
            apartamento.likes--
            await apartamento.save()
        }
        res.json({ message: 'Like decrementado correctamente', apartamento})
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el like'})
    }
})

router.post('/apartamentos/:id/reservas', async (req, res) => {
    try {
        const apartamento = await Apartamento.findById(req.params.id).populate('reservas')
        const reservas = apartamento.reservas
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
        
        res.status(200).json({ mensaje: 'reservado'})
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear la reserva' })
    }
})

module.exports = router