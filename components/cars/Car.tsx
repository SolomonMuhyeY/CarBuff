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
          <div className='mt-4'>
            <p className='text-sm font-medium text-gray-900'>{car.creator}</p>
            <p className='text-sm text-gray-600'>{car.creator_email}</p>
            <a
              href={`car/${car.slug}`}
              className='inline-block px-6 py-2 my-4 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-300'
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
