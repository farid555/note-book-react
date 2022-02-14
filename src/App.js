import React from "react";

const App = () => {
  const title = "Welcome to new React NoteBook";
  const like = 50;
  const link = "https://github.com/";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like} times...</p>
        <p> {10}</p>
        <p> [1, 2, 3, 4]</p>
        <p>{Math.random() * 10 + 1}</p>
        <a href={link}> Github</a>
      </div>
    </div>
  );
};

export default App;
