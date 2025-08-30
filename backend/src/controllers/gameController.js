const gameModel = require('../models/gameModel')

const handleCreateGame = async (req, res) => {
  try {
    const id = await gameModel.createGame(req.body)

    res.status(201).json({ id })
  } catch (error) {
    console.error('❌ Failed to create game:', error)
    res.status(500).send('Create failed')
  }
}

const handleGetGames = async (req, res) => {
  try {
    const games = await gameModel.getAllGames()
    res.json(games)
  } catch (error) {
    res.status(500).send('Read failed')
  }
}

const handleGetGameById = async (req, res) => {
  try {
    const game = await gameModel.getGameById(req.params.id)
    if (!game) return res.status(404).send('Not found')
    res.json(game)
  } catch (error) {
    res.status(500).send('Read failed')
  }
}

const handleUpdateGame = async (req, res) => {
  try {
    const updatedFields = { ...req.body }

    // host_name is not allowed to modify for later use. 
    delete updatedFields.host_name

    const success = await gameModel.updateGame(req.params.id, updatedFields)
    if (!success) {
      return res.status(404).send('Game not found or update failed')
    }
    res.sendStatus(204)
  } catch (error) {
    console.error('Failed to update game:', error)
    res.status(500).send('Update failed')
  }
}

const handleDeleteGame = async (req, res) => {
  try {
    await gameModel.deleteGame(req.params.id)
    res.sendStatus(204)
  } catch (error) {
    res.status(500).send('Delete failed')
  }
}

module.exports = {
  handleCreateGame,
  handleGetGames,
  handleGetGameById,
  handleUpdateGame,
  handleDeleteGame,
}
