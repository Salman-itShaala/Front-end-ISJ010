import React, { useEffect, useRef } from "react";
import styles from "./newcomponent.module.css";

const NewComponent = () => {
  //
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Enter name" ref={inputRef} />
      <br />
      <br />
      <button>Click me</button>
    </div>
  );
};

export default NewComponent;