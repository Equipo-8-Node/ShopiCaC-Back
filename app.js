const express = require(`express`)
const overrride = require('method-override')
const rutas = require('./src/routes/mainRoutes')
const morgan = require("morgan");
const path = require('path');
const cors = require("cors");

const port = 3000 || 8080 || process.env.PORT
const app = express()

//Middleware
app.use(cors({
  origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}));
app.use(morgan("dev"));
app.use(express.json());


// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }))

app.use(overrride('_method'))

// Rutas
app.use('/', rutas)

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html')
})

// Iniciar el servidor
app.listen(port, () => console.log(`Servidor funcionando en puerto ${port}`))
