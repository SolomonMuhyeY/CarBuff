import fs from "fs";
import path from "path";
import sql from "better-sqlite3";
import { Car } from "@/types";

const db = sql("cars.db");

export async function getCars(): Promise<Car[] | unknown> {
  await new Promise((res) => setTimeout(res, 2000));
  return db.prepare("SELECT * FROM cars").all();
}

export function getCar(slug: string) {
  return db.prepare("SELECT * FROM cars WHERE slug = ?").get(slug);
}

export const saveCar = async (car: Car) => {
  const fileName = car.imagePath.split("/").pop() ?? ""; // Default to an empty string if undefined
  const filePath = path.join("public", "assets", fileName);

  const arrayBuffer = await car.image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  fs.writeFile(filePath, buffer, (error) => {
    if (error) throw new Error("Saving image failed!");

    db.prepare(
      `INSERT INTO cars (carName, review, creator, creator_email, imagePath, slug) VALUES (
        @carName,
        @review,
        @creator,
        @creator_email,
        @imagePath,
        @slug
      )`
    ).run({
      carName: car.carName,
      review: car.review,
      creator: car.creator,
      creator_email: car.creator_email,
      imagePath: car.imagePath,
      slug: car.slug,
    });
  });
};
