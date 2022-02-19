import React, { useState, useEffect } from "react";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <div className="container">
      <h1>Home</h1>
      <ul>
        {post.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
