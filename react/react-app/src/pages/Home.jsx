import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    // logic
    navigate("about");
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <br />
      <button onClick={() => handleClick()}>Navigate to About page</button>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/product/1">Product 1</Link>
      <br />
      <Link to="/product/2">Product 2</Link>
    </>
  );
};

export default Home;
