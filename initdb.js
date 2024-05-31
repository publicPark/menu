const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyHouses = [
  {
    key: 'public',
    title: '우리집',
    summary: 'I cook you cook',
    location: {
      lat: 37.545619,
      lng: 126.93474,
    },
  },
  {
    key: 'fight-club',
    title: 'Fight club',
    summary: `
1. **You do not talk about Fight Club**: This rule emphasizes the secretive and exclusive nature of the club. Members are not allowed to discuss the existence or activities of Fight Club with anyone outside the club.

2. **You do not talk about Fight Club**: This is a repetition of the first rule, emphasizing its importance and the need for strict adherence.

3. **If someone says "stop" or goes limp, taps out, the fight is over**: This rule establishes a sense of control and safety within the fights. It ensures that participants respect each other's limits and avoid causing serious harm.

4. **Only two guys to a fight**: This rule sets the structure for the fights, limiting them to one-on-one encounters between members.

5. **One fight at a time**: This rule prevents chaos and ensures that fights are organized and controlled.

6. **No shirts, no shoes**: This rule adds a raw and primal element to the fights, stripping away societal norms and symbols of status.

7. **Fights will go on as long as they have to**: This rule underscores the intensity and determination of the fights. There are no time limits or restrictions; fights continue until there is a clear outcome.

8. **If this is your first night at Fight Club, you have to fight**: This rule serves as an initiation for new members, demonstrating their commitment to the club and its principles.
`,
  },
];
const dummyMeals = [
  {
    houseKey: 'public',
    title: 'My salad',
    image: '/my-salad.jpeg',
    summary: 'tomato cucumber salad',
    category: 'Salads',
    // created
    // available
  },
  {
    houseKey: 'public',
    title: 'Coconut milk and fruit',
    image: '/coconut.jpeg',
    summary: 'yummy yummy',
    category: 'Desserts',
  },
  {
    houseKey: 'public',
    title: '자몽과 요거트',
    image: undefined,
    summary: 'yummy yummy',
    category: 'Desserts',
  },
];

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS houses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    lat REAL,
    lng REAL
  )
`
).run();

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    houseKey TEXT NOT NULL,
    title TEXT NOT NULL,
    image TEXT,
    summary TEXT,
    category TEXT
  )
`
).run();

async function initData() {
  for (const house of dummyHouses) {
    const { key, title, summary, location } = house;
    const lat = location ? location.lat : null;
    const lng = location ? location.lng : null;

    db.prepare(
      `
    INSERT INTO houses (id, key, title, summary, lat, lng)
    VALUES (null, @key, @title, @summary, @lat, @lng)
    `
    ).run({ key, title, summary, lat, lng });
  }

  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @houseKey,
         @title,
         @image,
         @summary,
         @category
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
