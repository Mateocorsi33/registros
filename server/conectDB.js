require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://granjalospibes:Lagranjaong@cluster0.7w9iw3b.mongodb.net/registros');

const objetobd = mongoose.connection

objetobd.on('connected', () => {
    console.log('Conexion correcta a MongoDB')
})
objetobd.on('error', () => {
    console.log('Error en la conexion a MongoDB')
})

module.exports = mongoose