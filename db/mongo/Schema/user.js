const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})


UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

mongoose.model("User", UserSchema)

