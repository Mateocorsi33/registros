require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const objetobd = mongoose.connection

objetobd.on('connected', () => {
    console.log('Conexion correcta a MongoDB')
})
objetobd.on('error', () => {
    console.log('Error en la conexion a MongoDB')
})

module.exports = mongoose