const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artworks = mongoose.model('Artwork', newSchema({
    name: String,
    description: String,
    type: String,
    images: [String],
    createdDate: String,
}))

module.exports = Artworks