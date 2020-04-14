const db = require('./dbconfig');

module.exports = {
    findUser(email) {
        return db('users')
            .where({email})
            .first()
    },

    findById(id) {
        console.log(id)
        return db('users')
            .where({id})
            .first()
            // .then(res=> console.log(res, 'user'))
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
    },

    editUser(id, body) {
        return db('users')
            .update(body)
            .where({id})
            .returning("*")
    }
}