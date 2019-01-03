const { sign } = require("jsonwebtoken")
const { SECRET } = require("../../config")
module.exports = {
  index: async (ctx, next) => {
    const user = ctx.request.body
    if (user && user.username) {
      let { username } = user
      const token = sign({ username }, SECRET, {
        expiresIn: "1h"
      })
      console.log(token)
      ctx.body = {
        message: "GET Token Success",
        code: 1,
        token
      }
    } else {
      ctx.body = {
        message: "Params Error",
        code: -1
      }
    }
  }
}