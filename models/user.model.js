const db = require('./dbconfig');

module.exports = {
    findUser(email) {
        return db('users')
            .where({email})
            .first()
    },
    findUserLocation(location_id) {
        return db('locations')
            .where({id: location_id})
            .first()
    },

    createUser(body) {
        const {email, password, location_id,profile_url} = body
        return db('users')
            .insert({email,password,location_id,profile_url})
            .returning('*')
            .then(res => res[0])
            .catch(err => console.error(err))
    }
}