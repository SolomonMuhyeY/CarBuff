import { sampleCars } from "./data/carsData";

const sql = require("better-sqlite3");
const db = sql("cars.db");

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL,
    carName TEXT NOT NULL,
    image TEXT NOT NULL,
    review TEXT NOT NULL,
    creator TEXT NOT NULL, 
    creator_email TEXT NOT NULL
  )
  `
).run();

function initData() {
  const stmt = db.prepare(`
    INSERT INTO cars (slug, carName, image, review, creator, creator_email) VALUES (
      @slug,
      @carName,
      @image,
      @review,
      @creator,
      @creator_email
    )
  `);

  for (const car of sampleCars) {
    stmt.run(car);
  }
}

// Initialize the database with sample data
initData();
