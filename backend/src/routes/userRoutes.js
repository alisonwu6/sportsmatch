const express = require('express')
const router = express.Router()
const { handleCreateUser } = require('../controllers/userController')
const upload = require('../middleware/upload')

router.post('/', upload.single('avatar'), handleCreateUser)

module.exports = router
