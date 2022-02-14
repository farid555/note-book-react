import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";

const BlogDetails = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    error,
    ispending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigator("/");
    });
  };

  return (
    <div className="blog-details">
      <h1>BlogDetails - {id}</h1>
      {ispending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
