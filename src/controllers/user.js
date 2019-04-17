const User = require('../models/user')
const Message = require('../models/message')

module.exports = {

  indexUser: async (req, res, next) => {
    const users = await User.find({})
    res.status(200).json(users)
  },

  indexMessage: async (req, res, next) => {
    const messages = await Message.find({})
    res.status(200).json(messages)
  },
}
