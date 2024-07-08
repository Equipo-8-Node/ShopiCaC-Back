const express = require(`express`)
const router = express.Router()
const controladores = require('../controllers/mainController')
const path = require('path')

router.get("/productos", (req, res) => {
  res.sendFile(path.resolve(__dirname, './../views/products.html'))
})

router.get("/contacto", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/pages/contact.html'))
})

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/pages/login.html'))
})

router.get("/agregar-producto", (req, res) => {
  res.sendFile(path.resolve(__dirname, `../../public/pages/agregar_producto.html`));
})

/*********************************************************************************************/

router.get("/getProductos", controladores.getProductos)
router.get("/getCategorias", controladores.getCategorias)

router.post("/crearproducto", controladores.crearProducto)

router.get("/editar-producto/:id", controladores.editarProducto)

router.put("/editar-producto", controladores.actualizarProducto)

router.delete("/productos/:id", controladores.eliminarProducto)


module.exports = router