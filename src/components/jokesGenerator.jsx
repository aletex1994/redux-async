import React from "react";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";
import { fetchRandomJoke } from "../actions/jokes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { lastJoke } from "../selectors";

export const JokesGenerator = () => {
 const dispatch = useDispatch();
 const joke = useSelector(lastJoke);

 const generateJoke = () => {
  dispatch(fetchRandomJoke());
 };

 return (
  <>
   {joke.isLoading ? (
    <p>loading...</p>
   ) : (
    <IconButton
     color="error"
     aria-label="generate-joke"
     component="label"
     size="large"
     onClick={() => generateJoke()}
    >
     <CachedIcon />
    </IconButton>
   )}
  </>
 );
};
