import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";
import { fetchRandomJoke } from "../actions/jokes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { lang, lastJoke } from "../selectors";
import { setGlobalLang } from "../actions/lang";

export const JokesGenerator = () => {
 const dispatch = useDispatch();
 const joke = useSelector(lastJoke);
 const currLang = useSelector(lang);

 const generateJoke = () => {
  dispatch(fetchRandomJoke(currLang));
  dispatch(setGlobalLang("FR"));
 };

 useEffect(() => {
  generateJoke();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

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
