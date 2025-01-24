import { useDispatch } from "react-redux";
import { increment, increseByValue } from "./slice/counterSlice";

const Comp1 = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increseByValue(5))}>Add 2</button>
    </>
  );
};

export default Comp1;
