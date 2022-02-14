import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlog] = useState([
    {
      title: "THE JOURNEY OF THE MARMABILL",
      body: "For those spending time at home, looking for a cozy adventure or bedtime story for kids, we offer this imaginative rhyming picture book, read by the author, Daniel Errico.",
      author: "Aaniel Errico",
      id: 1,
    },
    {
      title: "GEMMA",
      body: "Gemma is a middle grade novel that follows a curious explorer and her ring-tailed lemur, Milo, as they hunt for the “most greatest treasure in the world”. Solving riddles, battling a bell-wearing jaguar.",
      author: "Daniel Errico",
      id: 2,
    },
    {
      title: "THE GUARDIANS OF LORE",
      body: "While drawing in class at Stagwood School, 12-year old Cal sees a frog staring at him through the window. Stranger than that, is the fact that this frog happens to be wearing glasses. Cal and his best friend, Soy, ",
      author: "Daniel Errico",
      id: 3,
    },
    {
      title: "HE PARTICULAR WAY OF THE ODD MS. MCKAY",
      body: "This quirky tale is about our most infamous character of all. If you don’t have a soufflé-baking, trumpet-blaring, sleigh-riding friend, then maybe it’s time that you met Ms. McKay. Told as a monorhyme poem.",
      author: "Daniel Errico",
      id: 4,
    },
  ]);

  useEffect(() => {
    console.log("useEffect Run");
    console.log(blogs);
  });

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };
  return (
    <div>
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
