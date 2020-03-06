const jwt = require('jsonwebtoken');


function createToken(user) {
    const token = jwt.sign({data: user.email}, 'secret', { expiresIn: '1h' });
    return token
}

async function decodeToken(token) {
    try {
        const verify = await jwt.verify(token, 'secret');
        return verify
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { createToken, decodeToken}