const { addUserToRoom, removeUserFromRoom, getRoomWith, startRoom, getRoom } = require('./utils/rooms')
const logger = require('../utils/logger')

const crypto = require('crypto')
const randomId = (bytes) => crypto.randomBytes(bytes).toString('hex')

module.exports = (io, socket) => {
  const createRoom = (user) => {
    const roomCode = randomId(2)
    addUserToRoom(roomCode, user)
    socket.emit('create', roomCode)
    socket.join(roomCode)
  }

  const onJoining = async (data, callback) => {
    const roomCode = data.roomCode;
    const user = {
      username: data.username
    }
    const matchingSockets = await io.in(roomCode).allSockets()
    const roomExists = matchingSockets.size >= 1
    if (roomExists) {
      // Admit user into the room
      addUserToRoom(roomCode, user)
      socket.join(roomCode)
      const room = getRoom(roomCode)
      callback({})
    } else {
      callback({ error: 'The room code does not exist'})
    }
  }

  const joinedRoom = (data, callback) => {
    const user = {username: data.username};
    const roomCode = data.roomCode;
    // Emit session details (unused for now)
    socket.emit('session', {
      username: user.username
    })

    const room = getRoomWith(user)
    if (room) {
      // Broadcast number of users in the room
      io.to(roomCode).emit('update_user', {
        users: room.users, 
      })
      callback({started: room.started})
    }

  }

  const leaveRoom = (user) => {
    const room = getRoomWith(user)
    if (room) {
      const roomCode = room.roomCode
      logger.info('user left from room', roomCode)
      removeUserFromRoom(roomCode, user)
    }
  }

  const start = (roomCode) => {
    io.to(roomCode).emit('update_session_start', {
      start: true,
    })
    startRoom(roomCode);
  }

  const canvas_data = (data) => {
    io.to(data.roomCode).emit('canvas-data', data);
  }

  const clear = (data) => {
    io.to(data.roomCode).emit('clear', data)
  }

  const onShareWhiteboard = (data) => {
    io.to(data.roomCode).emit('share-whiteboard', data)
  }

  const onStopShare = (data) => {
    io.to(data.roomCode).emit('stop-share', data)
  }

  const onRemoveUser = (data) => {
    removeUserFromRoom(data.roomCode, data.user)
    const room = getRoom(data.roomCode)
    if (room) {
      const newUsers = room.users.filter(x => x.username !== data.user.username)
      removeUserFromRoom(data.roomCode, data.user)
      io.to(data.roomCode).emit("update_user", {
        users: newUsers
      })
    }
  }

  const onGetWhiteboards = (data) => {
    io.to(data.roomCode).emit("get-whiteboards", data)
  }

  socket.on('create', createRoom)
  socket.on('joining', onJoining)
  socket.on('userJoined', joinedRoom)
  socket.on('leave', leaveRoom)
  socket.on('startSession', start)
  socket.on('canvas-data', canvas_data)
  socket.on('clear', clear);
  socket.on("share-whiteboard", onShareWhiteboard)
  socket.on("stop-share", onStopShare)
  socket.on("remove-user", onRemoveUser)
  socket.on("get-whiteboards", onGetWhiteboards)
}