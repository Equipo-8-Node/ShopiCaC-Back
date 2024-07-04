const express = require(`express`)
const app = express()
const port = 3000 || 8080 || process.env.PORT

app.use(express.static(__dirname + '/public'))

app.get("/agregar-producto", (req, res) => {
  res.sendFile(__dirname + `/src/views/agregar_producto.html`)
})

app.get("/editar-producto", (req, res) => {
  res.sendFile(__dirname + `/src/views/editar-producto.html`)
})

app.post("/agregar-producto", (req, res) => {
  res.send('Algo')
})





app.listen(port, () => console.log(`Servidor funcionando en puerto ${port}`))
