const express = require('express')
const router = express.Router()
const controller = require('../controllers/gameController')

router.post('/', controller.handleCreateGame)
router.get('/', controller.handleGetGames)
router.get('/:id', controller.handleGetGameById)
router.put('/:id', controller.handleUpdateGame)
router.delete('/:id', controller.handleDeleteGame)

module.exports = router
