const express = require('express')

const artworks = require('./routes/artworks.js')

const app = express()

app.use('/api/artworks', artworks)

module.exports = app