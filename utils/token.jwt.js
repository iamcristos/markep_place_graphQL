const { AuthenticationError } = require('apollo-server')
const jwt = require('jsonwebtoken');


function createToken(user) {
    const token = jwt.sign({subject: user.id ,data: user.email}, 'secret', { expiresIn: '1h' });
    return token
}

async function decodeToken(token) {
    if (!token) {
        throw new Error('token required')
    }
    const verify = await jwt.verify(token, 'secret');
    return verify   
}

module.exports = { createToken, decodeToken}