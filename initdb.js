const sql = require('better-sqlite3')
const db = sql('meals.db')

const dummyHouses = [
  {
    houseId: 'public',
    title: '우리집',
    summary: 'I cook you cook',
    // currency: 'EUR'
    // location
  },
]
const dummyMeals = [
  {
    houseId: 'public',
    title: 'My salad',
    image: '/my-salad.jpeg',
    summary: 'tomato cucumber salad',
    category: 'Salads',
  },
  {
    houseId: 'public',
    title: 'Coconut milk and fruit',
    image: '/coconut.jpeg',
    summary: 'yummy yummy',
    category: 'Desserts',
  },
]

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS houses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    houseId TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    summary TEXT NOT NULL
  )
`
).run()

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    houseId TEXT NOT NULL,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    category TEXT
  )
`
).run()

async function initData() {
  const stmt2 = db.prepare(`
      INSERT INTO houses VALUES (
         null,
         @houseId,
         @title,
         @summary
      )
   `)
  for (const house of dummyHouses) {
    stmt2.run(house)
  }

  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @houseId,
         @title,
         @image,
         @summary,
         @category
      )
   `)

  for (const meal of dummyMeals) {
    stmt.run(meal)
  }
}

initData()
