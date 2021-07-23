const { getRoomWith } = require('./rooms')

const crypto = require('crypto')
const randomId = (bytes) => crypto.randomBytes(bytes).toString('hex')

const userMiddleware = (socket, next) => {
  // Check if user already exists
  const userID = socket.handshake.auth.userID
  if (userID) {
    socket.userID = userID
    const room = getRoomWith(userID)
    if (room) {
      socket.join(room.roomCode)
    }
    return next()
  }

  // create new user
  socket.userID = randomId(8)
  next()
}

module.exports = { userMiddleware }

