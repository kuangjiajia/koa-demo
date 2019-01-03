const mongoose = require("mongoose")
const UserType = require("./model")

const User = mongoose.model("User")

const users = {
  type: UserType,
  args: {},
  async resolve() {
    return User.find({})
  }
}

module.exports = {
  users
}