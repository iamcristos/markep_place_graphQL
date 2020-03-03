const { gql } = require("apollo-server");

const Product = gql`
    type Product {
        name: String!
    }

    type Query {
        product: Product
    }

`;

module.exports = Product