const User = require("./user.schema");
const Product = require("./product.schema");
const Location = require("./location.schema");
const Order = require("./order.schema")

const rootSchema = `
schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`;

const typeDefs = [User, Product, Location, Order]

module.exports = {typeDefs};