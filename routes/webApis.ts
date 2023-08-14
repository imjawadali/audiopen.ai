import { createHmac } from "crypto"
import * as express from "express"
import { Request, Response } from "express"
import { AppDataSource } from "../typeorm/data-source"
import { User } from "../typeorm/entity/User"

const { authMiddleware } = require('../middlewares/authMiddleware')
const router = express.Router()

// middleware that is specific to any request on this router
router.use((req: Request, _: Response, next: Function) => {
    console.log('webApis/', req.body)
    next()
})

router.get('/', authMiddleware, async (req, res) => {
    try {
        const users = await AppDataSource.manager.find(User)
        res.send({ users })
    } catch (error) {
        console.log({ error })
        res.status(404).send("Something went wrong!")
    } 
})

module.exports = router