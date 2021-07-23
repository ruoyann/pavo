const rooms = []

const addRoom = (roomCode, host) => {
  const newRoom = {
    roomCode,
    users: [host], 
    started: false,
    host: host,
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

const addUserToRoom = (roomCode, currentUser) => {
  const room = rooms.find(room => room.roomCode === roomCode)
  console.log("coming into add user to room")
  if (room) {
    const users = room.users
    const userExist = users.find(user => user.username === currentUser.username)
    if (!userExist) {
      users.push(currentUser)
    }
  } else {
    addRoom(roomCode, currentUser)
  }
  return currentUser;
}

const removeUserFromRoom = (roomCode, currentUser) => {
  const room = rooms.find(room => room.roomCode === roomCode)
  if (room) {
    const users = room.users
    const index = users.findIndex(user => user.username === currentUser.username)
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

const getRoomWith = (currentUser) => {
  const result = rooms.find(room => room.users.find(user => user.username.localeCompare(currentUser.username) === 0));
  return result;
}

const getAllRooms = () => {
  return rooms
}

const startRoom = (roomCode) => {
  const currentRoom = rooms.find(room => room.roomCode === roomCode);
  currentRoom.started = true;
}

module.exports = {
  addRoom,
  removeRoom,
  addUserToRoom,
  removeUserFromRoom,
  getRoom,
  getRoomWith,
  getAllRooms, 
  startRoom
}