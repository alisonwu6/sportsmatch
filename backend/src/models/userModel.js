const bcrypt = require('bcrypt');
const waitForDB = require('../utils/db')
const createUser = async (username, firstname, lastname, email, password, avatarPath, role = 'user') => {
  const db = await waitForDB()
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'INSERT INTO users (firstname, lastname, username, email, password, avatar, role) VALUES (?, ?, ?, ?, ?, ?, ?)'
  const [result] = await db.execute(sql, [firstname, lastname, username, email, hashedPassword, avatarPath, role])
  return result.insertId
}

const findUserByUsername = async (username) => {
  const db = await waitForDB()
  const sql = 'SELECT * FROM users WHERE username = ?'
  const [rows] = await db.execute(sql, [username])
  return rows[0]
}

module.exports = { createUser, findUserByUsername }
