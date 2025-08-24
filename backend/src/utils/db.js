const mysql = require('mysql2/promise')

const waitForDB = async () => {
  let connected = false
  let pool

  while (!connected) {
    try {
      pool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'sportsmatch',
        waitForConnections: true,
        connectionLimit: 10,
      })

      const conn = await pool.getConnection()
      console.log('✅ Connected to DB')
      conn.release()
      connected = true
    } catch (err) {
      console.log('⏳ Waiting for DB to be ready...')
      await new Promise(res => setTimeout(res, 2000))
    }
  }

  return pool
}

module.exports = waitForDB