import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found...</h1>
      <p>That page cant be found</p>
      <Link to="/">Back to homepage...</Link>
    </div>
  );
};

export default Error;
