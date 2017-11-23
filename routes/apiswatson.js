const express = require('express')
const router = express.Router()

//Injeção de dependência
const ApisWatsonController = require('../controllers/apiswatson')()

router.post('/trechos', ApisWatsonController.pegarVideo.bind(ApisWatsonController))
router.get('/speech', ApisWatsonController.uploadToDiscovery.bind(ApisWatsonController))
router.get('/delete', ApisWatsonController.deleteDocument.bind(ApisWatsonController))

module.exports = router