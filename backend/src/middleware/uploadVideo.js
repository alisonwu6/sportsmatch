const multer = require('multer')
const path = require('path')

// storage 設定：放在 uploads/videos 資料夾
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads/videos')
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`
    cb(null, uniqueName)
  },
})

// 過濾影片格式
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'video/mp4',
    'video/mkv',
    'video/quicktime',
    'video/x-msvideo',
  ]
  if (allowedTypes.includes(file.mimetype)) cb(null, true)
  else cb(new Error('Only video files are allowed'), false)
}

const uploadVideo = multer({ storage, fileFilter })

module.exports = uploadVideo
