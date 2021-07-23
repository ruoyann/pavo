const rooms = []

const addRoom = (roomCode) => {
  const newRoom = {
    roomCode,
    users: []
  }
  rooms.push(newRoom)
  return newRoom
}

const removeRoom = (roomCode) => {
  const index = rooms.findIndex(room => room.roomCode === roomCode)
  if (index !== -1) {
    return rooms.splice(index, 1)[0]
  }
}

const addUserToRoom = (roomCode, userID) => {
  const room = rooms.find(room => room.roomCode === roomCode)
  const newUser = {
    userID
  }
  if (room) {
    const users = room.users
    const userExist = users.find(user => user.userID === userID)
    if (!userExist) {
      users.push(newUser)
    }
  } else {
    const newRoom = {
      roomCode,
      users: [newUser],
      messages: [],
    }
    rooms.push(newRoom)
  }
  return userID
}

const removeUserFromRoom = (roomCode, userID) => {
  const room = rooms.find(room => room.roomCode === roomCode)
  if (room) {
    const users = room.users
    const index = users.findIndex(user => user.userID === userID)
    if (index !== -1) {
      room.users.splice(index, 1)
      if (users.length === 0) {
        removeRoom(roomCode)
      }
    }
  }
}

const getRoom = (roomCode) => {
  return rooms.find(room => room.roomCode === roomCode)
}

const getRoomWith = (userID) => {
  return rooms.find(room => room.users.find(user => user.userID === userID))
}

const getAllRooms = () => {
  return rooms
}

module.exports = {
  addRoom,
  removeRoom,
  addUserToRoom,
  removeUserFromRoom,
  getRoom,
  getRoomWith,
  getAllRooms
}