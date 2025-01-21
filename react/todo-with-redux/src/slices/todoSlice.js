import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);

      state.todos.push(action.payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo } = todoSlice.actions; //{addTodo : ()=>{}}
