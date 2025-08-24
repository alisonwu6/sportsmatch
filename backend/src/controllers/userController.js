const { createUser } = require('../models/userModel')

const handleCreateUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const avatarPath = req.file ? `/uploads/${req.file.filename}` : null

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' })
    }

    const userId = await createUser(name, email, avatarPath)

    res.status(201).json({
      message: 'User created successfully',
      user: { id: userId, name, email, avatar: avatarPath },
    })
  } catch (err) {
    console.error('❌ Failed to create user:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = { handleCreateUser }
