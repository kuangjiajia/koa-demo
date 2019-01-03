const fs = require("fs")
const path = require("path")
var controller = {}

function initialRouter() {
  fs.readdirSync(__dirname).map(item => {
    if (fs.statSync(path.resolve(__dirname, item)).isDirectory()) {
      controller[item] = require(path.resolve(__dirname, item))
    }
  })
}
initialRouter()
console.log(controller)


module.exports = controller