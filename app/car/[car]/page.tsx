import Image from "next/image";
import { getCar } from "@/app/lib/cars";

const Page = ({
  params,
}: {
  params: {
    car: string;
  };
}) => {
  // Ensure params.car is valid before calling getCar
  const car = params.car ? getCar(params.car) : null;

  console.log(params.car);
  // console.log(car);

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='px-6 py-8'>
          <h1 className='text-3xl font-semibold text-gray-800 text-center mb-4'>
            {car ? car.carName : "Car Not Found"}
          </h1>
          {car ? (
            <div className='flex items-center mx-6 mb-4'>
              <div className='relative w-96 h-96'>
                <Image
                  src={car.image}
                  alt={car.carName}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
            </div>
          ) : null}
          <p className='text-gray-600 text-lg mb-4'>
            {car ? car.review : "No review available."}
          </p>
          <div className='border-t border-gray-200 pt-4'>
            <p className='text-sm text-gray-500 mb-1'>
              Created by {car ? car.creator : "Unknown"}
            </p>
            <p className='text-sm text-gray-500'>
              {car ? car.creator_email : "No email provided"}
            </p>
            <a
              className='text-sm text-gray-500'
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
