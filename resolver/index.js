const { merge } = require("lodash")
const product = require('./product.resolver');
const user = require('./user.resolver');

const resolver = merge(product, user);

module.exports = resolver