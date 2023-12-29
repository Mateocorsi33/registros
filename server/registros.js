const express = require('express');
const router = express.Router();
const multer = require('multer');

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const eschemaregistros = new eschema({
    date: String,
    especie: String,
    cantidad: String,
    sexo: String,
    ingreso: String,
    estado: String,
    detalle: String,
    imagenes: Array,
    idusuario: String,
});

const ModeloUsuario = mongoose.model('registros', eschemaregistros);
module.exports = router;


// Route para agregar registros
router.post('/registros', upload.array('imagenes', 4), (req, res) => {
    console.log('Solicitud POST recibida:', req.body);
    console.log('Imágenes recibidas:', req.files);

    if (!req.body || !req.body.date) {
        console.error('Error: Datos incompletos en la solicitud');
        return res.status(400).send('Datos incompletos en la solicitud');
    }

    const newregistro = new ModeloUsuario({
        date: req.body.date,
        especie: req.body.especie,
        cantidad: req.body.cantidad,
        sexo: req.body.sexo,
        ingreso: req.body.ingreso,
        estado: req.body.estado,
        detalle: req.body.detalle,
        imagenes: req.files.map(file => file.buffer),
        idusuario: req.body.idusuario,
    });
    
    newregistro.save()
    .then(() => {
        console.log('Registro agregado correctamente');
        res.send('Registro agregado correctamente');
    })
    .catch(err => {
        console.error('Error al agregar registro:', err);
        res.send(err);
    });
});

// Route para visualizar registros
router.get('/registros/obtener', async (req, res) => {
    console.log('Solicitud GET recibida');

    try {
        const registros = await ModeloUsuario.find({}).exec();
        console.log('Registros encontrados:', registros);
        res.send(registros);
    } catch (err) {
        console.error('Error al obtener registros:', err);
        res.status(500).send(err);
    }
});