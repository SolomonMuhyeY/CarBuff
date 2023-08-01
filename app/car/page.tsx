import { getCars } from "@/app/lib/cars";
import { CarProps } from "@/types";
import CarsGrid from "@/components/cars/CarsGrid";

const CarsPage = () => {
  const cars: CarProps[] = getCars();

  return (
    <>
      <div className=''>
        <div className='w-4/5 mx-auto text-center text-xl px-8 py-6 my-6 border-2 '>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            quo dicta dolorum id odit ab esse dolor saepe sed illo sunt
            doloribus consequatur facere sit nam, nulla ullam a magnam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sunt nesciunt libero soluta perspiciatis reprehenderit molestias,
            impedit, molestiae placeat sit saepe beatae maiores tempora et
            dolores recusandae eveniet omnis expedita.
          </p>
        </div>
        <CarsGrid cars={cars} />
      </div>
    </>
  );
};

export default CarsPage;
