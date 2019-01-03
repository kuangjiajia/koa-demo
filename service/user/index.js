const mongoose = require("mongoose")

const User = mongoose.model("User")

class UserApi {
  async addUser(newUser) {
    const user = new User(newUser)
    await user.save()
  }
}

module.exports = new UserApi()