const express = require(`express`)
const app = express()
const port = 3000 || 8080 || process.env.PORT

app.get("/", (req, res) => {
  res.send(`<h1>Se respondio algo</h1>`)
})

app.listen(port, () => console.log(`Servidor funcionando en puerto ${port}`))
