import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 2;
    },
    decrement: (state) => {
      state.count = state.count - 2;
    },
    increseByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, increseByValue } = counterSlice.actions;
