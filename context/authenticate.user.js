const { decodeToken } = require('../utils/token.jwt');

async function authenticateUser(token, model) {
    try {
        const verifyToken = await decodeToken(token);
        console.log(verifyToken)
        const user = await model.user.findUser(verifyToken.data);
        return !user ? null : user
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {authenticateUser}
