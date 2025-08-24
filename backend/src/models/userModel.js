
const waitForDB = require('../utils/db')

const createUser = async (name, email, avatarPath) => {
  const db = await waitForDB()
  const sql = 'INSERT INTO users (name, email, avatar) VALUES (?, ?, ?)'
  const [result] = await db.execute(sql, [name, email, avatarPath])
  return result.insertId
}

module.exports = { createUser }
