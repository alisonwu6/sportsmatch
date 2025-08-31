const { createUser } = require('../models/userModel')

const handleCreateUser = async (req, res) => {
  try {
    const { username, firstname, lastname, email, role, password } = req.body

    if (!username) {
      return res.status(400).json({ error: 'Username is required' })
    }

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    if (!firstname) {
      return res.status(400).json({ error: 'Firstname is required' })
    }

    if (!lastname) {
      return res.status(400).json({ error: 'Lastname is required' })
    }

    if (!password) {
      return res.status(400).json({ error: 'Password is required' })
    }

    const avatarPath = req.file ? `/uploads/${req.file.filename}` : null
    const userId = await createUser(
      username,
      firstname,
      lastname,
      email,
      password,
      avatarPath,
      role
    )

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: userId,
        username,
        firstname,
        lastname,
        email,
        avatar: avatarPath,
        role,
      },
    })
  } catch (err) {
    console.error('Failed to create user:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = { handleCreateUser }
