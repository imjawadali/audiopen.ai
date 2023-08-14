const express = require('express')
const { authMiddleware } = require('../middlewares/authMiddleware')
const router = express.Router()

// middleware that is specific to any request on this router
router.use((req, res, next) => {
    console.log('webApis/', req.body)
    next()
})

router.get('/', authMiddleware, (req, res) => {
    res.send({ messege: "success" })
})

module.exports = router