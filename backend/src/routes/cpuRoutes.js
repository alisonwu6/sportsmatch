const express = require('express')
const router = express.Router()
const { handleCpuHeavyTask } = require('../controllers/cpuController')

router.get('/cpu-heavy', handleCpuHeavyTask)

module.exports = router
