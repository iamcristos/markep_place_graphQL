const { gql } = require('apollo-server');

const Order = gql`
    type Subscription {
       notifyOrder: Order
    }

    type Order {
        id: ID!
        buyer: User!
        product: Product!
        message: String!
        processed: Boolean
        created: String
    }

    input OrderInput {
        buyer: Float!
        product: Float!
        message: String!
        processed: Boolean
        created: String
    }

    extend type Query {
        order(input:IdInput!): Order!
    }

    extend type Mutation {
        createOrder(input: OrderInput): Order!
    }
`;

module.exports = Order