const db = require('./dbconfig');

module.exports = {
    findUser(email) {
        db('users')
            .where({email})
            .first()
            .then(res =>{
                console.log(res)
            })
    },
    findLocation() {
        db('locations').then((res) => (console.log(res)))
    }
}