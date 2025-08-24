require('dotenv').config()
const jwt = require('jsonwebtoken')
const users = require('../data/users')

const handleLogin = async (req, res) => {
  const { username, password } = req.body

  const user = users.find((u) => u.username === username)
  if (!user || password !== user.password) {
    return res.status(401).send('Invalid credentials')
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  )

  res.json({ authToken: token })
}

module.exports = {
  handleLogin,
}
