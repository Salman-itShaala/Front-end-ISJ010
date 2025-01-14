import React, { useState } from "react";
import Main from "../components/main/Main";
import NewArrivals from "../components/new-arrivals/NewArrivals";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
      <NewArrivals />
    </>
  );
};

const Counter1 = ({ count, setCount }) => {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase count 1</button>
    </>
  );
};

const Counter2 = ({ count, setCount }) => {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase count 2</button>
    </>
  );
};
{
  /* <Main /> */
}
// <NewArrivals />
export default Home;
