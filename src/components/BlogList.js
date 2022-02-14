import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>HomePage</h1>
      <div>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div className="blog-previews" key={blog.id}>
                <h2>{blog.title}</h2>
                <p> Written by {blog.author}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
