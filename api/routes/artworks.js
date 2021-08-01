const express = require('express')

const artworks = require('../controllers/artworks')


const router = express.Router()

router.get('/', artworks.getAllArtworks)

module.exports = router