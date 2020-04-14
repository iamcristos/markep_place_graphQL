const db = require('./dbconfig');

module.exports = {
    findById(id) {
        return db('products')
            .where({id})
            .first()
    },

    createProduct(body) {
        return db('products')
            .insert(body)
            .returning('*')
            .then(res=> res[0])
            .catch(err => console.error(err,'kkkkk'))
    },

    findAll() {
        return db('products')
    },

    updateProduct(id, update) {
        return db('products')
            .update(update)
            .where({id})
            .returning('*')
    }
}