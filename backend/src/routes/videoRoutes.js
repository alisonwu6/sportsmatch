const ffmpeg = require('fluent-ffmpeg')
const uploadVideo = require('../middleware/uploadVideo')
const express = require('express')
const router = express.Router()
const { transcodeVideo } = require('../controllers/videoController')

router.post('/upload-video', uploadVideo.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No video uploaded' })
  }

  return res.json({
    message: 'Video uploaded successfully',
    filename: req.file.filename,
  })
})

// test CPU intensive task
router.get('/transcode', (req, res) => transcodeVideo(req, res))

module.exports = router
