const {ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');
const {typeDefs} = require('./typedefs');
const resolvers = require('./resolver');


const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;
const schema = makeExecutableSchema({typeDefs, resolvers})
const server = new ApolloServer({schema});

server.listen().then(({url}) =>{
    console.log(`🚀  Server ready at ${url}`)
});