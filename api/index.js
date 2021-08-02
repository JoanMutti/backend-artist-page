const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const artworks = require('./routes/artworks.js')

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.use('/api/artworks', artworks)

module.exports = app