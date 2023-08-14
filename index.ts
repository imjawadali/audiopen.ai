require('dotenv').config()
import * as express from "express"
import { Request, Response } from "express"
import { AppDataSource } from "./typeorm/data-source"

const cors = require("cors")
const bodyParser = require('body-parser')
const path = require('path')

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

const app = express()

var corsOptions = { origin: "*" }
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const webApis = require('./routes/webApis')
app.use('/api', webApis)

app.use(express.static('web/build'))
app.get('*', (_: Request, res: Response) => res.sendFile(path.resolve(__dirname, 'web', 'build', 'index.html')))

const PORT = process.env.PORT || 8000
app.listen(PORT)