const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const archivobd = require('./conectdb');
const routes = require('./registros');

// Middleware CORS
const corsOptions = {
  origin: 'https://registros-beta.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use('/api', routes);

// Middleware para procesar cuerpos de solicitud JSON y formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para agregar nuevos registros
app.use(express.json());
app.post('/api/registros', routes);

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor Back-End Node.js. Corriendo...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo correctamente en el puerto ${PORT}`);
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});