import React from "react";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div>
      <h1>HomePage</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p> Written by {blog.author}</p>
              <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
