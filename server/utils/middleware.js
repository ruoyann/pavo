const logger = require('./logger')

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.name)
  logger.error(error.message)


  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'Error') {
    return response.status(400).json({ error: 'invalid topic/query/orientation value' })
  }

  next(error)
}

module.exports = {
  unknownEndpoint,
  errorHandler
}