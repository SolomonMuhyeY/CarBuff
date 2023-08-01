import React from "react";

const BlogDetailPages = ({ params }) => {
  return (
    <div className='text-center my-8'>
      <h1 className='text-xl my-3'>Dynamic Routing...</h1>
      <p>{params.posts}</p>
    </div>
  );
};

export default BlogDetailPages;
