require('dotenv').config()
const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

var corsOptions = { origin: "*" }
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const webApis = require('./routes/webApis')
app.use('/api', webApis)

app.use(express.static('web/build'))
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'web', 'build', 'index.html')))

const PORT = process.env.PORT || 8000
app.listen(PORT)