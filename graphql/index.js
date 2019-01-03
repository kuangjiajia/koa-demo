const { GraphQLObjectType, GraphQLSchema } = require("graphql")
const UserQueries = require("./user")

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Queries",
    fields: Object.assign(UserQueries)
  })
});
