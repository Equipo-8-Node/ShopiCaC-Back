const express = require('express')
const router = express.Router()
const controladores = require('../controllers/mainController')
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => { cb(null, `public/img/`) },
//     filename: (req, file, cb) => { cb(null, Date.now() + "_" + file.originalname) }
// })

// const uploadFile = multer({ storage })

router.get("/getAllProducts", controladores.getAllProducts)
router.get("/getProductsInicio", controladores.getProductsInicio)
router.get("/getCategorias", controladores.getCategorias)

router.post("/crearproducto", controladores.crearProducto)
router.get("/editarproducto/:id", controladores.editarProducto)
router.patch("/actualizarproducto", controladores.actualizarProducto)
router.delete("/eliminarproducto/:id", controladores.eliminarProducto)










///
/*
router.post('/listado', uploadFile.single('archivo'), controladores.crearRegistro)
router.get('/modificar/:num', controladores.getModificar)
router.patch('/modificar', controladores.actualizar)
router.delete('/listado', controladores.eliminar)
*/

module.exports = router