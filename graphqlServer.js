var {buildSchema} = require("graphql");
var {importSchema} = require("graphql-import");
var express = require("express");
var graphqlHTTP = require("express-graphql");
var cors = require("cors");
var schema = importSchema("./src/graphql/schema.graphql");
var resolvers = require("./src/graphql/resolvers");

var app = express();

app.use(cors);

app.use("/graphql", graphqlHTTP({
    schema: null,
    rootValue: null,
    graphiql: true
}));

app.listen(4000);