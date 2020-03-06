const { gql } = require('apollo-server');

const User = gql`
    type User {
        id: Float!
        email: String!
        location: Location
        profile_url: String
    }

    input UserInput {
        email: String!
        location_id: Float!
        profile_url: String
        password: String!
    }

    input GetUserEmail {
        email: String!
    }

    extend type Query {
        user(input: GetUserEmail!): User!
    }

    extend type Mutation {
        createUser(input: UserInput!): User!
    }
`;

module.exports = User