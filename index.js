const {ApolloServer , makeExecutableSchema } = require('apollo-server');
// const { makeExecutableSchema } = require('graphql-tools');
// const pubSub = new PubSub();
const {typeDefs} = require('./typedefs');
const resolvers = require('./resolver');
const context = require('./context');


const rootSchema = `
schema {
  query: Query
  mutation: Mutation
}
`;
const schema = makeExecutableSchema({typeDefs, resolvers})
const server = new ApolloServer({schema, context,subscriptions: {
  onConnect: () => {
    console.log(`Subscriptions successfully connected to ${server.subscriptionsPath}`);
  },
  onDisconnect: () => {
    console.log('Subscriptions successfully disconnected!');
  }
},});

server.listen().then(({url}) =>{
  console.log(`🚀  Server ready at ${url}`)
});
// module.exports = pubSub ;