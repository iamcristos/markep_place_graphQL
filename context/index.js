const model = require('../models')
const { authenticateUser } = require('./authenticate.user');

module.exports = ({req, res}) => ({
    token: req.headers['auth-token'],
    model,
    user: async () => await authenticateUser(req.headers['auth-token'], model)
})