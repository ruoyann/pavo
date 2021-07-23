const waitingRooms = []

const addWaitingRoom = (roomCode, userID) => {
  const newRoom = {
    roomCode,
    userID,
  }
  waitingRooms.push(newRoom)
  return newRoom
}

const removeWaitingRoom = (userID) => {
  const index = waitingRooms.findIndex(room => room.userID === userID)
  if (index !== -1) {
    return waitingRooms.splice(index, 1)[0]
  }
}

const getWaitingRoom = () => {
  return waitingRooms.shift()
}

module.exports = { addWaitingRoom, removeWaitingRoom, getWaitingRoom }