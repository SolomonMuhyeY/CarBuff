import Link from "next/link";
import React from "react";
import CarsPage from "./car/page";

const page = () => {
  return (
    <div className='text-center my-10'>
      <h1 className='text-4xl'>Welcome</h1>
      <CarsPage />
    </div>
  );
};

export default page;
