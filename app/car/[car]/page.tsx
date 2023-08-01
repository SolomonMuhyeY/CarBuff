const page = ({
  params,
}: {
  params: {
    car: string;
  };
}) => {
  return (
    <div className='text-center my-4 text-xl'>
      <h1 className='text-3xl text-center'>Dynamic Card Routing ....</h1>
      <p>{params.car}</p>
    </div>
  );
};

export default page;
