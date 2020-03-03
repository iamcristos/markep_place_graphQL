const { gql } = require('apollo-server');

const User = gql`
    type User {
        name: String!
    }

    extend type Query {
        user: User!
    }
`;

module.exports = User