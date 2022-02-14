import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the dat from that resource...");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setBlogs(data);
          setIspending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIspending(false);
        });
    }, 1000);

    console.log("test");
  }, []);

  return (
    <div className="home">
      {ispending && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
