const controller = require('../controller')
const Router = require("koa-router")
const jwt = require("koa-jwt")

const schema = require("../graphql")
const { SECRET } = require("../config")
const { graphqlKoa, graphiqlKoa } = require("apollo-server-koa")

const router = new Router()


module.exports = app => {
  router.get("/home", jwt({ SECRET }), controller.home.index)
    .post("/login", controller.login.index)
    .get('/graphql', graphqlKoa({ schema: schema }))
    .post('/graphql', graphqlKoa({ schema: schema }))
    .get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
  app.use(router.routes())
    .use(router.allowedMethods())
}