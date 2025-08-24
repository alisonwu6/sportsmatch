const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mysql = require('mysql2/promise')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Test route
app.get('/api/health', (req, res) => {
  res.json({ message: 'health is good' })
})

// Connect to MySQL
async function startServer() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })

    console.log('✅ MySQL')

    app.listen(PORT, () => {
      console.log(`✅ Server port:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Failed to connect to DB:', err.message)
    process.exit(1)
  }
}

startServer()
