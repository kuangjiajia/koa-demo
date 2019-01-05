const controller = require('../controller')
const Router = require("koa-router")
const jwt = require("koa-jwt")

const { SECRET } = require("../config")

const router = new Router()


module.exports = app => {
  router.get("/home", jwt({ SECRET }), controller.home.index)
    .post("/login", controller.login.index)
    .get('/graphql', controller.graphql.graphql)
    .post('/graphql', controller.graphql.graphql)
    .get('/graphiql', controller.graphql.graphiql)

  app.use(router.routes())
    .use(router.allowedMethods())
}