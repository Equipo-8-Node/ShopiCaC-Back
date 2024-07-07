const express = require(`express`)
const app = express()
const overrride = require('method-override')
const rutas = require('./src/routes/mainRoutes')
const port = 3000 || 8080 || process.env.PORT

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(overrride('_method'))
app.use('/', rutas)

app.use((req, res,next) => {
  res.status(404).sendFile(__dirname + '/public/pages/404.html')
})

app.listen(port, () => console.log(`Servidor funcionando en puerto ${port}`))
