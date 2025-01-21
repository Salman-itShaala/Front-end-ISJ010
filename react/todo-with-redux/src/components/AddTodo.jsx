import React, { useState } from "react";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    console.log(todoInput);

    const todoObj = {
      title: todoInput,
      id: Date.now(),
    };

    dispatch(addTodo(todoObj));
  };

  return (
    <div className="flex justify-center items-center gap-2 ">
      <TextField
        id="outlined"
        label="Add to do here"
        placeholder="Enter Todo"
        multiline
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      />

      <Button variant="contained" onClick={() => handleButtonClick()}>
        Add To do
      </Button>
    </div>
  );
};

export default AddTodo;
