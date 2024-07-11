
const express = require('express')
const router = express.Router()
const controladores = require(`../controllers/mainController`)
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, `public/img/`) },
  filename: (req, file, cb) => { cb(null, Date.now() + "_" + file.originalname) }
})

const uploadFile = multer({ storage })

router.get("/getAllProducts", controladores.getAllProducts)
router.get("/getProductsInicio", controladores.getProductsInicio)


///
/*
router.post('/listado', uploadFile.single('archivo'), controladores.crearRegistro)
router.get('/modificar/:num', controladores.getModificar)
router.patch('/modificar', controladores.actualizar)
router.delete('/listado', controladores.eliminar)
*/

router.get("/productos", (req, res) => {
  res.sendFile(path.resolve(__dirname, './../views/products.html'))
})

router.get("/contacto", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/contact.html'))
})

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/login.html'))
})

router.get("/agregar-producto", (req, res) => {
  res.sendFile(path.resolve(__dirname, `../public/agregar_producto.html`));
})

/*********************************************************************************************/

router.get("/getProductos", controladores.getProductos)
router.get("/getCategorias", controladores.getCategorias)

router.post("/crearproducto", controladores.crearProducto)

router.get("/editar-producto/:id", controladores.editarProducto)

router.put("/editar-producto", controladores.actualizarProducto)

router.delete("/productos/:id", controladores.eliminarProducto)



module.exports = router