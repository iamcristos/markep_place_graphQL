const { merge } = require("lodash")
const product = require('./product.resolver');
const user = require('./user.resolver');
const location = require('./location.resolver');
const order = require('./order.resolver');

const resolver = merge( product, user, location, order);

module.exports = resolver