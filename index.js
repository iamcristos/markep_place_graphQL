const {ApolloServer , makeExecutableSchema} = require('apollo-server');
// const { makeExecutableSchema } = require('graphql-tools');
const {typeDefs} = require('./typedefs');
const resolvers = require('./resolver');
const context = require('./context');


const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;
const schema = makeExecutableSchema({typeDefs:[rootSchema, ...typeDefs], resolvers})
const server = new ApolloServer({schema, context});

server.listen().then(({url}) =>{
    console.log(`🚀  Server ready at ${url}`)
});