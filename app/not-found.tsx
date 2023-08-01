"use client";

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          404 - Page Not Found
        </h2>
        <p className='text-gray-600'>
          Sorry, the page you are looking for could not be found.
        </p>
        <button
          type='button'
          className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
