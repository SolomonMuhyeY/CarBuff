import sql from "better-sqlite3";

const db = sql("cars.db");
export function getCars() {
  return db.prepare("SELECT * FROM cars").all();
}
