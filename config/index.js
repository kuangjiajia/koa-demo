const path = require("path")


//中间键配置
const SECRET = "kuangjiajia"
const PORT = 6677
const PUBLICDIR = path.resolve(__dirname, "../public")
const VIEWSDIR = path.resolve(__dirname, "../views")


//数据库配置
const db = "mongodb://localhost/blog"
const user = ""
const pass = ""
const MONGO = {
  db,
  user,
  pass
}

module.exports = {
  SECRET,
  PORT,
  PUBLICDIR,
  VIEWSDIR,
  MONGO
}