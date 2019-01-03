const mongoose = require("mongoose")
const { MONGO } = require("../../config")

const fs = require("fs")
const path = require("path")

const models = path.resolve(__dirname, "../../db/mongo/Schema")

fs.readdirSync(models)
  .forEach(file => { require(path.resolve(models, file)) })

async function connect() {

  mongoose.Promise = global.Promise

  mongoose.connect(MONGO.db, {
    user: MONGO.user,
    pass: MONGO.pass,
    poolSize: 10,
    useNewUrlParser: true
  }, err => {
    if (err) {
      console.log("连接失败")
    } else {
      console.log("连接数据库成功")
    }
  })
  const con = mongoose.connection

  con.on("disconnected", () => {
    mongoose.connect(MONGO.db)
  })

  con.on("error", err => {
    console.log("连接数据库出错! error: " + err)
  })
}

// async function close() {
//   await mongoose.connection().close()
// }


module.exports = () => {
  return async (ctx, next) => {
    await connect()
    await next()
    // await close()
  }
}