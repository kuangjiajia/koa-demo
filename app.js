const Koa = require("koa")
const middleware = require('./middleware')
const router = require("./router")
const config = require("./config")

const app = new Koa()

middleware(app)

router(app)

app.listen(config.PORT)