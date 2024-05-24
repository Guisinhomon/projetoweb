const express = require('express')
const cors = require('cors')
const app = express()
const ClienteRoute = require('./routes/ClienteRoutes')

//Configuração de resposta do JSON//
app.use(express.json())
app.use(cors({Credentials: true, origin: 'http://localhost:3000'}))

app.use(express.static('public'))

/* HABILITAR O USO DE ROTAS PELO EXPRESS */
app.use('/clients', ClienteRoutes)

app.listen(5000)