const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const verifyAdmin = require('../middleware/verifyAdmin')

router.get('/', verifyToken, verifyAdmin, (req, res) => {
  res.json({ message: 'Admin content' })
})

module.exports = router
