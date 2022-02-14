import React from "react";

const App = () => {
  const title = "Welcome to new React NoteBook";
  const like = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like} times...</p>
      </div>
    </div>
  );
};

export default App;
