const express = require("express");
const app = express();
const override = require('method-override')
const rutas = require('./src/routes/mainRoutes.js')
const port = 3000 || 8080 || process.env.PORT;

const morgan = require("morgan");
const path = require('path');
const cors = require("cors");

// Middleware
// app.use(cors({
//   origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
// }));
// app.use(morgan("dev"));
// app.use(express.json());

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(override('_metodo'))
app.use('/', rutas)

app.set('view engine', 'ejs')
app.set('views', (__dirname + '/src/views'))

// Rutas
app.get("/productos", (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/products.html'))
})

app.get("/contacto", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/contact.html'))
})

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/login.html'))
})

app.get("/agregar-producto", (req, res) => {
  res.sendFile(path.resolve(__dirname, `./public/agregar_producto.html`));
})

app.get("/editar-producto/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/editar-producto.html'));
})

app.use((req, res,next) => {
  res.status(404).sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
  console.log(`Servidor funcionando en puerto ${port}`);
});
