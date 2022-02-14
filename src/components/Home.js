import BlogList from "./BlogList";
import useFetch from "../custom-hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    ispending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  console.log(blogs);

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
