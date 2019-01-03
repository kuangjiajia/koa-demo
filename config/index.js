const path = require("path")


const SECRET = "kuangjiajia"
const PORT = 6677
const PUBLICDIR = path.resolve(__dirname, "../public")
const VIEWSDIR = path.resolve(__dirname, "../views")



module.exports = {
  SECRET,
  PORT,
  PUBLICDIR,
  VIEWSDIR
}