import "./App.css";
import Button from "@mui/material/Button";
import { createContext, useContext, useState } from "react";
import Component3 from "./Component3";

export const CounterContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const userName = "Salman";

  return (
    <div className="text-white h-[100vh] bg-slate-950 flex justify-center gap-8 items-center">
      <h1>counter {counter}</h1>
      <CounterContext.Provider value={[counter, setCounter, userName]}>
        <Component3 />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
