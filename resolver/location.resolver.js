const location = async(_, {input}, {model}) =>{
    const {id} = input;
    try {
        const location = await model.location.findById(id)
        return location
    } catch (error) {
        throw new Error(error)
    }  
};

const locations = async(_, __, {model}) => {
    try {
        const locations = await model.location.findAll()
        return locations
    } catch (error) {
        throw new Error(error)
    }
};

const addLocation = async(_, {input}, {model}) =>{
    const {city, lga} = input
    try {
        const location = await model.location.addLocation({city,lga});
        return location[0]
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    Query: {
        location,
        locations
    },
    Mutation: {addLocation}
}