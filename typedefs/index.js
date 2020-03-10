const User = require("./user.schema");
const Product = require("./product.schema");
const Location = require("./location.schema");
const Order = require("./order.schema")

const typeDefs = [User, Product, Location, Order]

module.exports = {typeDefs};