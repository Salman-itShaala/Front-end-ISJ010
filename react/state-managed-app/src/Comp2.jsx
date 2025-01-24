import { useSelector } from "react-redux";

const Comp2 = () => {
  const counterState = useSelector((state) => state.counter);

  console.log(counterState.count);

  return (
    <>
      <h1 style={{ color: "red" }}>{counterState.count}</h1>
    </>
  );
};

export default Comp2;
