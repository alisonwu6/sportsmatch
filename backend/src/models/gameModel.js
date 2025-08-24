const waitForDB = require('../utils/db')

const createGame = async (gameData) => {
  const {
    title,
    sport,
    venue,
    host_name,
    starts_at,
    ends_at,
    max_players,
    tags_json = null,
    status = 'open',
  } = gameData

  const db = await waitForDB()
  const sql = `
    INSERT INTO games (
      title, sport, venue, host_name, starts_at, ends_at, max_players, tags_json, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `
  const [result] = await db.execute(sql, [
    title,
    sport,
    venue,
    host_name,
    starts_at,
    ends_at,
    max_players,
    tags_json ? JSON.stringify(tags_json) : null,
    status,
  ])
  return result.insertId
}

const getAllGames = async () => {
  const db = await waitForDB()
  const [rows] = await db.execute('SELECT * FROM games')
  return rows
}

const getGameById = async (id) => {
  const db = await waitForDB()
  const [rows] = await db.execute('SELECT * FROM games WHERE id = ?', [id])
  return rows[0]
}

const updateGame = async (id, title, description) => {
  const db = await waitForDB()
  await db.execute('UPDATE games SET title = ?, description = ? WHERE id = ?', [
    title,
    description,
    id,
  ])
}

const deleteGame = async (id) => {
  const db = await waitForDB()
  await db.execute('DELETE FROM games WHERE id = ?', [id])
}

module.exports = {
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame,
}
