const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')

// force https on heroku
// https://jaketrent.com/post/https-redirect-node-heroku
if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
      next()
    }
  })
}

// app.use('/', express.static('client')) // look in the build directory to serve frontend

app.use(cors())
app.use(express.json())

module.exports = app