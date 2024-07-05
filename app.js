const express = require("express");
const override = require('method-override')
const rutas = require('./src/routes/mainRoutes.js')
const morgan = require("morgan");
const path = require('path');
const cors = require("cors");

const app = express();
const port = 4000;


// Middleware
app.use('/', rutas)

app.use(cors({
  origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}));
app.use(morgan("dev"));
app.use(express.json());

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
/*
app.post("/carrito/comprar", async (req, res) => {
  if (req.body && req.body.length > 0) {
    return res.sendStatus(200);
  }
  res.sendStatus(400);
});
*/

// Ruta para servir 'index.html' cuando se accede a '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para servir 'products.html' cuando se accede a '/products'
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

// Ruta para servir 'contact.html' cuando se accede a '/contact'
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Ruta para servir 'login.html' cuando se accede a '/login'
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).send(`<h1 style="color: red">Recurso no encontrado!</h1>`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Hola, estoy arriba en el puerto: ${port}`);
});