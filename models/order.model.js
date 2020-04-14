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
            .where({ 'orders.id': id})
            // .join('users','orders.buyer',  'users.id')
            // .join('products','orders.product',  'products.id')
            // .select('*')
            .first()
    },

    transaction(body, id) {
        return db.transaction(function(trx) {
            db('orders').update(body)
                .where({id})
                .transacting(trx)
                .then(res => {
                    
                })
        })
    }
}