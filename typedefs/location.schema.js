const { gql } = require('apollo-server');

const Location = gql`
    type Location {
        city: String!
        lga: String!
    }

    input Inputlocation {
        city: String!
        lga: String!
    }

    input inputLocationId {
        id: Float!
    }

    extend type Query {
        location(input: inputLocationId!): Location!
        locations: [Location]!
    }

    type Mutation {
        addLocation(input: Inputlocation!) : Location!
    }
`;

module.exports = Location;