const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  create: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  listMessage: [{
    type: Schema.Types.ObjectId,
    ref: 'message',
  }],
})

module.exports = mongoose.model('user', userSchema)
