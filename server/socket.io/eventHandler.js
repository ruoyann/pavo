const { addUserToRoom, removeUserFromRoom, getRoomWith } = require('./utils/rooms')
const logger = require('../utils/logger')

const crypto = require('crypto')
const randomId = (bytes) => crypto.randomBytes(bytes).toString('hex')

module.exports = (io, socket) => {
  const createRoom = () => {
    const roomCode = randomId(2)
    addUserToRoom(roomCode, socket.userID)
    socket.emit('create', roomCode)
    socket.join(roomCode)
  }

  const onJoining = async (roomCode, callback) => {
    const matchingSockets = await io.in(roomCode).allSockets()
    const roomExists = matchingSockets.size >= 1
    if (roomExists) {
      // Admit user into the room
      addUserToRoom(roomCode, socket.userID)
      socket.join(roomCode)
      callback({})
    } else {
      callback({ error: 'The room code does not exist'})
    }
  }

  const joinedRoom = (roomCode) => {
    // Emit session details (unused for now)
    socket.emit('session', {
      userID: socket.userID
    })

    const room = getRoomWith(socket.userID)
    // Broadcast number of users in the room
    io.to(roomCode).emit('update_user', {
      users: room.users
    })

  }

  const leaveRoom = () => {
    const userID = socket.userID
    const room = getRoomWith(userID)
    if (room) {
      const roomCode = room.roomCode
      logger.info('user left from room', roomCode)
      removeUserFromRoom(roomCode, userID)
      socket.emit('userJoined', roomCode)
    }
  }

  socket.on('create', createRoom)
  socket.on('joining', onJoining)
  socket.on('userJoined', joinedRoom)
  socket.on('leave', leaveRoom)
}