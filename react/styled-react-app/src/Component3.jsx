import React, { useContext } from "react";
import { CounterContext } from "./App";

const Component3 = () => {
  const [counter, setCounter, userName] = useContext(CounterContext);

  return (
    <div className="text-white">
      The counter is {counter}
      <br />
      <button onClick={() => setCounter(counter + 1)}>I'm {userName}</button>
    </div>
  );
};

export default Component3;
