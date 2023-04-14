const mongoose = require('mongoose');
const { Apartamento } = require('./models/apartamento'); // Importa el modelo de Mongoose

const URI = 'mongodb+srv://jozef:jozef@cluster0.trrjhin.mongodb.net/apartamentosDB?retryWrites=true&w=majority'

mongoose.connect(URI)

mongoose.connection.on('open', () =>{ 
    console.log('Base de datos conectada')
})

mongoose.connection.on('error', (err) =>{ 
    console.log(err)
})

Apartamento.updateMany({}, { $set: { likes: 0 } })
  .then((res) => {
    console.log("Se han actualizado los apartamentos exitosamente.");
    mongoose.connection.close(); // Cierra la conexión después de actualizar los documentos
  })
  .catch((err) => {
    console.log("Error al actualizar los apartamentos:", err);
  });