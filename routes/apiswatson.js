const express = require('express')
const router = express.Router()

//Injeção de dependência
const ApisWatsonController = require('../controllers/apiswatson')()

router.post('/trechos', ApisWatsonController.pegarVideo.bind(ApisWatsonController))
router.post('/audio', ApisWatsonController.processarAudio.bind(ApisWatsonController))

router.get('/speech', ApisWatsonController.uploadToDiscovery.bind(ApisWatsonController))
router.get('/delete', ApisWatsonController.deleteDocument.bind(ApisWatsonController))
router.get('/allvideos', ApisWatsonController.getAllVideos.bind(ApisWatsonController))

router.delete('/:name', ApisWatsonController.removerVideo.bind(ApisWatsonController))

module.exports = router