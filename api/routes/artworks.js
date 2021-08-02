const express = require('express')

const artworks = require('../controllers/artworks')


const router = express.Router()

router.get('/', artworks.getAllArtworks)
router.post('/', artworks.createArtwork)
router.delete('/:id', artworks.deleteArtwork)

module.exports = router