require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const getDB = require('../utils/db')

const handleLogin = async (req, res) => {
  const { username, password } = req.body

  try {
    const db = await getDB()
    const [rows] = await db.execute(
      'SELECT id, username, password, role FROM users WHERE username = ?',
      [username]
    )

    const user = rows[0]

    const isMatch = await bcrypt.compare(password, user.password)
    if (!user || !isMatch) {
      return res.status(401).send('Invalid credentials')
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.json({ authToken: token })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).send('Server error')
  }
}

module.exports = {
  handleLogin,
}
