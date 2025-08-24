const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mysql = require('mysql2/promise')
const waitForDB = require('./utils/db')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const gameRoutes = require('./routes/gameRoutes')
const adminRoutes = require('./routes/adminRoutes')

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/uploads', express.static('src/uploads')) // serve 圖片
app.use('/api/admin', adminRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/games', gameRoutes)

// Test route
// app.get('/api/health', (req, res) => {
//   res.json({ message: 'health is good' })
// })

// Connect to MySQL
async function startServer() {
  try {
    await waitForDB()

    app.listen(PORT, () => {
      console.log(`✅ Server port:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Failed to connect to DB:', err.message)
    process.exit(1)
  }
}

startServer()
