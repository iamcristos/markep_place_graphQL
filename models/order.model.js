const db = require('./dbconfig');

module.exports = {
    createOrder(body) {
        return db('orders')
            .insert(body)
            .returning('*')
            .then(res => res[0])
            // .innerJoin('users','orders.buyer', '=', 'users.id')
            // .innerJoin('products','orders.product', '=', 'product.id')
    },

    getOrder(id) {
        return db('orders')
            .where({id})
            .first()
            .innerJoin('users','orders.buyer', '=', 'users.id')
            .innerJoin('products','orders.product', '=', 'product.id')
    }
}