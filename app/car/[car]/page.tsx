// components/CarPage.tsx
import Image from "next/image";
import { getCar } from "@/app/lib/cars";
import { notFound } from "next/navigation";
import { CarProps, Car } from "@/types";

const Page = ({ params }: { params: CarProps }): JSX.Element => {
  const car: Car | null = params.car ? (getCar(params.car) as Car) : null;

  if (!car) notFound();

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='px-6 py-8'>
          <h1 className='text-3xl font-semibold text-gray-800 text-center mb-4'>
            {car.carName}
          </h1>
          <div className='flex items-center mx-6 mb-4'>
            <div className='relative w-96 h-96'>
              <Image
                src={car.imagePath}
                alt={car.carName}
                layout='fill'
                className='rounded-lg'
              />
            </div>
          </div>
          <p className='text-gray-600 text-lg mb-4'>{car.review}</p>
          <div className='border-t border-gray-200 pt-4'>
            <p className='text-sm text-gray-500 mb-1'>
              Created by {car.creator}
            </p>
            <p className='text-sm text-gray-500'>{car.creator_email}</p>
            <a
              className='inline-block text-sm text-gray-500 px-6 py-2 border-2 border-lime-400 my-2 rounded-2xl'
              href={`mailto:${car.creator_email}`}
            >
              {car.creator} 📧
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
