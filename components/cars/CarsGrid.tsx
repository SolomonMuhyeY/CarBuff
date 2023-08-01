import React from "react";
import Car from "./Car";
import { getCars } from "@/app/lib/cars";
import { CarProps } from "@/types";

const CarsGrid = () => {
  const cars: CarProps[] = getCars();
  return (
    <div>
      {cars.map((car) => {
        return <Car key={car.slug} car={car} />;
      })}
    </div>
  );
};

export default CarsGrid;
