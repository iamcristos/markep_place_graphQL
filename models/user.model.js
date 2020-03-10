const db = require('./dbconfig');

module.exports = {
    findUser(email) {
        return db('users')
            .where({email})
            .first()
    },

    findById(id) {
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
        return db('users')
            .insert(body)
            .returning('*')
            .then(res => res[0])
            .catch(err => console.error(err))
    },

    editUser(id, body) {
        return db('users')
            .update(body)
            .where({id})
            .returning("*")
    }
}