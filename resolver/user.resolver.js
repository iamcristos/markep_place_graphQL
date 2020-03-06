const user = async (_,{input}, {model}) =>{
    const {email  } = input
   return model.user.findUser(email);
}

const createUser = async (_, {input}, {model}) =>{
    try {
        const user = await model.user.createUser(input)
        return user
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    Query: {user},
    Mutation: {createUser},
    User : {
        location({location_id}, _, {model}) {
            return model.user.findUserLocation(location_id)
        }
    }
}