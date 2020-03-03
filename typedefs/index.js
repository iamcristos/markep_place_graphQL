const User = require("./user.schema");
const Product = require("./product.schema");

const typeDefs = [User, Product]

module.exports = {typeDefs};