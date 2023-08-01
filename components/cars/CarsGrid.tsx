import React from "react";
import Car from "./Car";
import { CarProps } from "@/types";

const CarsGrid = ({ cars }: { cars: CarProps[] }) => {
  return (
    <div>
      {cars.map((car) => {
        return <Car key={car.slug} car={car} />;
      })}
    </div>
  );
};

export default CarsGrid;
