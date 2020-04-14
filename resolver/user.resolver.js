const { decodePassword, hashPassword } = require('../utils/bcrypt.hash');
const { createToken } = require('../utils/token.jwt')

const user = async (_,{input}, { user }) =>{
    const userData = await user()
    if(!userData) throw new Error('invalid token')
    return userData;
}

const createUser = async (_, {input}, {model}) =>{
    const {email, password, location_id,profile_url} = input;
    const body = {email,location_id,profile_url, password: hashPassword(password) };
    try {
        const user = await model.user.createUser(body)
        return user
    } catch (error) {
        throw new Error(error)
    }
};

const loginUser = async (_, {input}, {model}) => {
    const {email, password} = input;
    try {
        const userData = await model.user.findUser(email);
        userData.token = createToken(userData);
        console.log(userData)
        return (decodePassword(password, userData.password) 
            ? userData : new Error('invalid login details') )
    } catch (error) {
        throw new Error(error)
    }
};


module.exports = {
    Query: {user, loginUser},
    Mutation: {createUser},
    User : {
        location({location_id}, _, {model}) {
            return model.user.findUserLocation(location_id)
        }
    }
}