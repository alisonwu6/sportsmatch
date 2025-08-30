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
  const [rows] = await db.execute('SELECT * FROM games ORDER BY starts_at ASC')
  return rows
}

const getGameById = async (id) => {
  const db = await waitForDB()
  const [rows] = await db.execute('SELECT * FROM games WHERE id = ?', [id])
  return rows[0]
}

const updateGame = async (id, updatedFields) => {
  const db = await waitForDB()

  // do nothing if no fields provided
  if (!updatedFields || Object.keys(updatedFields).length === 0) {
    return false
  }

  // build dynamic sql
  const setClause = Object.keys(updatedFields)
    .map((field) => `${field} = ?`)
    .join(', ')

  // build SQL values array
  const values = Object.values(updatedFields)
  values.push(id)

  const sql = `UPDATE games SET ${setClause} WHERE id = ?`

  const [result] = await db.execute(sql, values)
  return result.affectedRows > 0
}

const deleteGame = async (id) => {
  const db = await waitForDB()
  await db.execute('DELETE FROM games WHERE id = ?', [id])
}

const bulkInsertGames = async (games) => {
  const db = await waitForDB()

  const sql = `
    INSERT INTO games (
      title, sport, venue, host_name, starts_at, ends_at, max_players, tags_json, status
    ) VALUES ?
  `

  const values = games.map((game) => [
    game.title,
    game.sport,
    game.venue,
    game.host_name,
    game.starts_at,
    game.ends_at,
    game.max_players,
    game.tags_json ? JSON.stringify(game.tags_json) : null,
    game.status || 'open',
  ])

  await db.query(sql, [values])
}

module.exports = {
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame,
  bulkInsertGames,
}
