const express = require(`express`)
const router = express.Router()
const path = require('path')

router.get("/agregar-producto", (req, res) => {
  res.sendFile(path.resolve(__dirname + './../views/agregar_producto.html'))
})

router.get("/editar-producto", (req, res) => {
  res.sendFile(path.resolve(__dirname + `./../views/editar-producto.html`))
})

router.post("/agregar-producto", (req, res) => {
  console.log(req.body)
  res.send('Algo')
})

router.put("/editar-producto", (req, res) => {
  console.log(req.body)
  res.send('Algo')
})

router.delete("/eliminar-producto", (req, res) => {
  console.log(req.body)
  res.send('Se elimino Algo')
})


module.exports = router