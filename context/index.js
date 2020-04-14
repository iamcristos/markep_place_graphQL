// const {pubSub} = require('../index')
const {PubSub} = require('apollo-server-express')
const pubSub = new PubSub();
const model = require('../models')
const { authenticateUser } = require('./authenticate.user');

module.exports = async({req, res, connection}) => {
    if (connection) {
        return {...connection.context, pubSub}
    }
    return({
    // connection: connection ? {...connection.context} : "pubSub",
    token: req.headers['auth-token'],
    model,
    pubSub,
    user: async () => await authenticateUser(req.headers['auth-token'], model)
})}