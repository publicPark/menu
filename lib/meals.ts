import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // test
  return db.prepare('SELECT * FROM meals').all()
}

export async function getHouses() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // test
  return db.prepare('SELECT * FROM houses').all()
}
