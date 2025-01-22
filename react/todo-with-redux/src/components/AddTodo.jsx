import React, { useState } from "react";
import { TextField } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (!todoInput) {
      alert("Invalid input");
      return;
    }
    const todoObj = {
      title: todoInput,
      id: Date.now(),
      isComplete: false,
    };

    dispatch(addTodo(todoObj));

    setTodoInput("");
  };

  return (
    <div className="flex justify-center items-center gap-4 ">
      <TextField
        id="outlined"
        label="Add to do here"
        placeholder="Enter Todo"
        multiline
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      />
      <Fab color="primary" aria-label="add" onClick={() => handleButtonClick()}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddTodo;
