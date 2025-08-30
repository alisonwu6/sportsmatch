const express = require('express')
const router = express.Router()
const { handleCreateUser } = require('../controllers/userController')
const uploadImage = require('../middleware/uploadImage')

router.post('/', uploadImage.single('avatar'), handleCreateUser)

module.exports = router
