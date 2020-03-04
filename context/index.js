const model = require('../models')

module.exports = ({req, res}) => ({
    token: req.headers['auth-token'],
    model
})