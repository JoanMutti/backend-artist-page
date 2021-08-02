const Artworks = require('../models/Artworks')

const artworks = {
    getAllArtworks: async (req, res) => {
        const artworks = await Artworks.find().exec()
        if(!artworks) res.status(403).send(artworks)
        res.status(200).send({artworks})
    },
    createArtwork: async (req, res) => {
        Artworks.create(req.body).then(artwork => res.status(201).send({artwork})).catch(err => res.status(403).send(err))
    },
    deleteArtwork: async (req, res) => {
        Artworks.findByIdAndDelete(req.params.id).exec().then(() => res.status(200).send('artwork deleted')).catch(err => res.status(403).send(err))
    }

}

module.exports = artworks