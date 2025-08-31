const express = require('express')
const router = express.Router()
const controller = require('../controllers/gameController')
const verifyToken = require('../middleware/verifyToken')

router.post('/', verifyToken, controller.handleCreateGame)
router.get('/', controller.handleGetGames)
router.get('/:id', controller.handleGetGameById)
router.put('/:id', verifyToken, controller.handleUpdateGame)
router.delete('/:id', verifyToken, controller.handleDeleteGame)

module.exports = router
