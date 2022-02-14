import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
