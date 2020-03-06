const User = require("./user.schema");
const Product = require("./product.schema");
const Location = require("./location.schema");

const typeDefs = [User, Product, Location]

module.exports = {typeDefs};