const db = require('./dbconfig');

module.exports = {
    findById(id) {
        return db('locations')
            .where({id})
            .first()
    },

    addLocation(body) {
        return db('locations')
        .insert(body)
        .returning('*')
    },

    findAll(){
        return db('locations')
        
    },
    editLocation(id, body) {
        return db('locations')
            .where({id})
            .update(body)
            .returning("*")
    }
}