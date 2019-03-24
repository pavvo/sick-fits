const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query')
const db = require('./db');

function createServer() {
    return new GraphQLServer({
        typeDefs: 
    })
}

module.exports = createServer;