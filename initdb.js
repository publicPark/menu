const sql = require('better-sqlite3')
const db = sql('meals.db')

const dummyHouses = [
  {
    houseId: 'public',
    title: 'My Home',
    summary: 'I cook you cook',
    currency: 'EUR',
    lang: 'en',
    host: '',
  },
]
const dummyMeals = [
  {
    houseId: 'public',
    title: 'My salad',
    image: '/my-salad.jpeg',
    summary: 'tomato cucumber salad',
    price: 5,
  },
]

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       houseId TEXT NOT NULL,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL
    )
`
).run()

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @houseId,
         @title,
         @image,
         @summary
      )
   `)

  for (const meal of dummyMeals) {
    stmt.run(meal)
  }
}

initData()
