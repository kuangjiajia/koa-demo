const { GraphQLString, GraphQLObjectType, GraphQLID } = require("graphql")

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    _id: GraphQLID,
    username: GraphQLString,
    password: GraphQLString,
    createdAt: GraphQLString,
    updatedAt: GraphQLString
  }
})

module.exports = UserType