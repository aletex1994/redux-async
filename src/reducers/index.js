import { configureStore } from "@reduxjs/toolkit";
import { jokesReducer } from "./jokes";
import { favJokesReducer } from "./favJokes";
import { langReducer } from "./lang";

export default configureStore({
 reducer: {
  jokes: jokesReducer,
  favJokes: favJokesReducer,
  lang: langReducer,
 },
});
