const multer = require('multer')
const path = require('path')

// storage setting
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads/images')
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) // get file extension
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`
    cb(null, uniqueName)
  },
})

// control image types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
  if (allowedTypes.includes(file.mimetype)) cb(null, true)
  else cb(new Error('Only images are allowed'), false)
}

const upload = multer({ storage, fileFilter })

module.exports = upload
