import sql from 'better-sqlite3';

const db = sql('meals.db');

type TypeHouse = {
  key: string;
  title: string;
  summary?: string;
  lat?: number;
  lng?: number;
};

export async function getMeals(key: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // test
  // throw new Error('loading fail')
  return db.prepare('SELECT * FROM meals WHERE houseKey = ?').all(key);
}
export async function getHouse(key: string) {
  return db.prepare('SELECT * FROM houses WHERE key = ?').get(key);
}

export async function getHouses() {
  const houses = db.prepare('SELECT * FROM houses').all() as TypeHouse[];
  const formattedHouses = houses.map((house) => ({
    ...house,
    location:
      house.lat && house.lng
        ? {
            lat: house.lat,
            lng: house.lng,
          }
        : null,
  }));
  return formattedHouses;
}
