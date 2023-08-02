import sql from "better-sqlite3";

const db = sql("cars.db");
export async function getCars() {
  await new Promise((res, rej) => setTimeout(res, 2000));
  return db.prepare("SELECT * FROM cars").all();
}
export function getCar(slug: string) {
  return db.prepare("SELECT * FROM cars WHERE slug = ?").get(slug);
}
