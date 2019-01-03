const controller = require('../controller')
const Router = require("koa-router")
const jwt = require("koa-jwt")
const { SECRET } = require("../config")
const router = new Router()


module.exports = app => {
  router.get("/home", jwt({ SECRET }), controller.home.index)
    .post("/login", controller.login.index)

  app.use(router.routes())
    .use(router.allowedMethods())
}