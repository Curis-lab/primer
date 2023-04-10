var {buildSchema} = require("graphql");
var express = require("express");
var graphqlHTTP = require("express-graphql");
var app = express();

let data = [];

app.use("/graphql", graphqlHTTP({
    schema: buildSchema(`

        type product{
            id:ID!
            name: String!
            category: String!
            price: Float!
        }

        type suppliers{
            id: ID!
            name: String!
            city: String!
            products: [ID]
        }
        
        type RootQuery{
            events: [String!]!    
        }

        type RootMutation{
            createEvent(name: String): String
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        events: ()=>{
            return ["foundei","fiioerh","oouer"]
        },
        createEvent:(args)=>{
            const eventName = args.name;
            return eventName;  
        }
    },
    graphiql: true
}));

app.listen(4000);