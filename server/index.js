const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const server = http.createServer(app)
const { userMiddleware } = require('./socket.io/utils/middleware')

const io = require('socket.io')(server)

io.use(userMiddleware)
const registerEventHandler = require('./socket.io/eventHandler')
const onConnection = (socket) => {
  registerEventHandler(io, socket)
}

io.on('connection', onConnection)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})