"use client";

import { shareCarPost } from "@/app/lib/carshare";
import FileUploader from "@/components/cars/FileUploader";

const ShareCarPost = () => {
  return (
    <form
      action={shareCarPost}
      className='max-w-lg mx-auto p-6 rounded-lg shadow-md'
    >
      <h2 className='text-2xl font-semibold mb-6'>Car Information</h2>
      <div className='flex space-x-4 mb-4'>
        <div className='flex-1'>
          <label
            htmlFor='creator'
            className='block text-gray-700 font-medium mb-2 capitalize'
          >
            Name
          </label>
          <input
            type='text'
            id='creator'
            name='creator'
            className='bg-gray-200 text-gray-900 w-full p-3 border rounded-lg  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div className='flex-1'>
          <label
            htmlFor='creator_email'
            className='block text-gray-700 font-medium mb-2 capitalize'
          >
            Email
          </label>
          <input
            type='email'
            id='creator_email'
            name='creator_email'
            className='w-full bg-gray-200 text-gray-900 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='carName'
          className='block  text-gray-700 font-medium mb-2 capitalize'
        >
          Car Name
        </label>
        <input
          type='text'
          id='carName'
          name='carName'
          className='w-full bg-gray-200 text-gray-900 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />
      </div>
      <FileUploader label='Your Image' name='image' />
      <div className='mb-4'>
        <label
          htmlFor='review'
          className='block text-gray-700 font-medium mb-2 capitalize'
        >
          Review
        </label>
        <textarea
          id='review'
          name='review'
          className='w-full bg-gray-200 text-gray-900 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <button
        type='submit'
        className='w-full px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
      >
        Submit
      </button>
    </form>
  );
};

export default ShareCarPost;
