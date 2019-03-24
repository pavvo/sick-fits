const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT, // CHECK ERROR HERE
    secret: process.env.PRISMA_SECRET,
    debug: false // turn on for error logging
})

module.exports = db;