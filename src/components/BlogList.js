import React from "react";

const BlogList = (props) => {
  const blogs = props.blogs;
  console.log(blogs);
  return (
    <div>
      <h1>HomePage</h1>
      <div>
        {blogs.map((item) => {
          return (
            <div className="blog-preview" key={item.id}>
              <h2>{item.title}</h2>
              <p> Written by {item.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
