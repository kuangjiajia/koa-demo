const Koa = require("koa")
const router = require("./router")
const middleware = require('./middleware')
const config = require("./config")

const app = new Koa()

middleware(app)
router(app)

app.listen(config.PORT)