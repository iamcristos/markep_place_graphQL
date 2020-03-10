const { gql } = require("apollo-server");

const Product = gql`
    enum AllowedProduct {
        animal
        plant
    }

    enum AllowedAnimal {
        livestock
        birds
    }

    enum AllowedPlant {
        cereal
        fruits
        tubers
        others
    }
    interface Product {
        id: Float!
        name: String!
        description: String!
        user: User!
        price: Float!
        type: AllowedProduct!
        age: Float!
    }
    type Animal implements Product{
        id: Float!
        name: String!
        description: String!
        user: User!
        price: Float!
        type: AllowedProduct!
        age: Float!
        weight: Float!
        height: Float
        animalType: AllowedAnimal!
    }

    type Plant implements Product{
        id: Float!
        name: String!
        description: String!
        user: User!
        price: Float!
        type: AllowedProduct!
        length: Float!
        plantType: AllowedPlant!
    }

    input CreateInput {
        id: Float!
        name: String!
        description: String!
        user: User!
        price: Float!
        type: AllowedProduct!
        age: Float
        weight: Float
        height: Float
        animalType: AllowedAnimal
        length: Float
        plantType: AllowedPlant
    }

    input IdInput {
        id: Float!
    }

    type Query {
        product(input: IdInput!): Product
        products: [Product]
    }

    etend type Mutation{
        createProduct(input: CreateInput!): Product!
    }

`;

module.exports = Product