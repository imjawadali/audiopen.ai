

exports.authMiddleware = function (req, res, next) {
    console.log('authMiddleware')
    next()
}