const db = require('./dbconfig');

module.exports = {
    findById(id) {
        db('products')
            .where({id})
            .first()
    },

    createProduct(body) {
        db('products')
            .insert(body)
            .returning('*')
    },

    updateProduct(id, update) {
        db('products')
            .update(update)
            .where({id})
            .returning('*')
    }
}