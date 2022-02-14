import React from "react";
// import { Navigate } from "react-router-dom";
import { useState } from "react";

const Create = () => {
  //   const navigator = Navigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button> Add Blog</button>
        {console.log(title)}
        {console.log(body)}
      </form>
    </div>
  );
};

export default Create;
