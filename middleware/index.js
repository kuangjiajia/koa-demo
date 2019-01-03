const koaStatic = require("koa-static")
const bodyParser = require("koa-bodyparser")
const views = require("koa-views")
const mongo = require("./mongo")
const { PUBLICDIR, VIEWSDIR } = require("../config")

module.exports = app => {
  app.use(mongo())
  app.use(bodyParser())
  app.use(koaStatic(PUBLICDIR))
  app.use(views(VIEWSDIR, {
    map: { html: 'ejs' }
  }))
}