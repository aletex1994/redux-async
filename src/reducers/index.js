import { configureStore } from "@reduxjs/toolkit";
import { jokesReducer } from "./jokes";
import { favJokesReducer } from "./favJokes";

export default configureStore({
 reducer: {
  jokes: jokesReducer,
  favJokes: favJokesReducer,
 },
});
