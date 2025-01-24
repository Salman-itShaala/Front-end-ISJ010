import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./slice/counterSlice";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

function App() {
  return (
    <>
      <Comp2 />
      <Comp1 />
    </>
  );
}

export default App;
