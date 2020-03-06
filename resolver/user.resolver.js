const { decodePassword, hashPassword } = require('../utils/bcrypt.hash');

const user = async (_,{input}, {model}) =>{
    const {email  } = input
   return model.user.findUser(email);
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
        userData.token = "hello"
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