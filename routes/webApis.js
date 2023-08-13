const express = require('express')
const router = express.Router()

// middleware that is specific to any request on this router
router.use((req, res, next) => {
    console.log('webApis/', req.body)
    next()
})

function authMiddleware(req, res, next) {
    console.log('authMiddleware')
    next()
}

router.get('/', (req, res) => {
    res.send({ messege: "success" })
})

module.exports = router