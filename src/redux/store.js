import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinataionSlice";
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "./slice/counterSlice";
import {
  destinationClicked,
  resetDestination,
} from "./slice/destinataionSlice";

export const store = configureStore({
  //when a action is called it tell all the components in the reducer to check if any action is available with that path
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});

console.log(store.getState());
//to invoke actions in counterSlice
// store.dispatch({
//   type: "counter/increment",
// });

export {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  destinationClicked,
  resetDestination,
};
