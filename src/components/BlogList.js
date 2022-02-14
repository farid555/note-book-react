import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>HomePage</h1>
      <div>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div className="blog-previews" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <p> Written by {blog.author}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
