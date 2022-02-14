import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>BlogDetails - {id}</h1>
    </div>
  );
};

export default BlogDetails;
