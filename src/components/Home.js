import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
    console.log("test");
  }, []);

  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
