import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinataionSlice";
import { resetReduxopedia } from "../action/actions";
const initalState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    //here we will define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += parseInt(action.payload, 10);
    },
    decrementMultiplier: (state, action) => {
      state.count -= parseInt(action.payload, 10);
    },
    // resetCounter: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxopedia, (state, action) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
