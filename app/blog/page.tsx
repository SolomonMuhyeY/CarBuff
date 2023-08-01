import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl my-8'>Blog</h1>
      <div className='links flex justify-center gap-3 border-2 w-fit px-12 py-3 m-auto'>
        <Link
          className='border-2 px-3 py-1 hover:text-red-400'
          href='blog/post-1'
        >
          Post 1
        </Link>
        <Link
          className='border-2 px-3 py-1 hover:text-red-400'
          href='blog/post-2'
        >
          Post 2
        </Link>
        <Link
          className='border-2 px-3 py-1 hover:text-red-400'
          href='blog/post-3'
        >
          Post 3
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
