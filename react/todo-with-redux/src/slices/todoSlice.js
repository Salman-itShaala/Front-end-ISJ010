import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const givenId = action.payload;

      const newArray = state.todos.filter((todo) => {
        return !(todo.id === givenId);
      });

      state.todos = newArray;
    },
    toggleComplete: (state, action) => {
      const givenId = action.payload;

      const newArray = state.todos.filter((todo) => {
        if (todo.id === givenId) {
          todo.isComplete = !todo.isComplete;
        }
        return true;
      });

      state.todos = newArray;
    },
    updateTodo: (state, action) => {
      const givenData = action.payload; // {title, id}

      console.log(givenData);

      const newArray = state.todos.filter((todo) => {
        if (todo.id === givenData.id) {
          todo.title = givenData.title;
        }
        return true;
      });

      console.log(newArray);

      state.todos = newArray;
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, toggleComplete, updateTodo } =
  todoSlice.actions; //{addTodo : ()=>{}}
