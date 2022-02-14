import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("ayme");
    setAge(30);
  };

  return (
    <div>
      <div>
        <h1>HomePage</h1>
        <p>
          {name} is {age} years old.
        </p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Home;
