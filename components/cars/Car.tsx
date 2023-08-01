import { CarProps } from "@/types";
import Image from "next/image";

const Car = ({ car }: { car: CarProps }) => {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <Image
            src={car.image}
            alt={car.carName}
            className='h-48 w-full object-cover md:h-full md:w-48'
            width={192}
            height={192}
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {car.carName}
          </div>
          <p className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
            {car.review}
          </p>
          <p className='mt-2 text-gray-500'>{car.review}</p>
          <div className='mt-4'>
            <p className='text-sm font-medium text-gray-900'>{car.creator}</p>
            <p className='text-sm text-gray-600'>{car.creator_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
