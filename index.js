const http = require('http');
const {ApolloServer , makeExecutableSchema } = require('apollo-server-express');
const express = require('express')
const {typeDefs} = require('./typedefs');
const resolvers = require('./resolver');
const context = require('./context');
const app = express()


const schema = makeExecutableSchema({typeDefs, resolvers})


const server = new ApolloServer({schema, resolvers, context,subscriptions: {
  onConnect: () => {
    console.log(`Subscriptions successfully connected to ${server.subscriptionsPath}`);
  },
  onDisconnect: () => {
    console.log('Subscriptions successfully disconnected!');
  }
},
// playground: {subscriptionEndpoint: 'g'}
});

server.applyMiddleware({app, path: '/'});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:4000${server.subscriptionsPath}`)
})
// server.listen().then(({url}) =>{
//   console.log(`🚀  Server ready at ${url}`)
// });
// module.exports = pubSub ;