import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addJokeToFavorite } from "../actions/favJokes";
import { fetchRandomJoke } from "../actions/jokes";
import { lastJoke } from "../selectors";

export const JokeCard = () => {
 const joke = useSelector(lastJoke);
 const dispatch = useDispatch();
 const addToFavorite = (joke) => {
  const payload = {
   joke,
   color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  };
  try {
   dispatch(addJokeToFavorite(payload));
  } catch (e) {
   console.log(e);
  } finally {
   dispatch(fetchRandomJoke());
  }
 };

 return (
  <Card sx={{ minWidth: 275, mt: 1 }}>
   {!joke.isLoading && joke.joke != null && (
    <>
     <CardContent>
      <Typography color="text.secondary" sx={{ fontSize: 12 }} gutterBottom>
       Joke of the Day <br />
       {joke.joke.type.toUpperCase()}
      </Typography>
      <div style={{ textAlign: "left" }}>
       <Typography component="div">
        <b>A: </b>
        {joke.joke.setup}
       </Typography>
       <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <b>B: </b>
        {joke.joke.punchline}
       </Typography>
      </div>
     </CardContent>
     <CardActions sx={{ alignContent: "flex-end" }}>
      <IconButton
       color="error"
       aria-label="add-to-favorite"
       component="label"
       size="large"
       onClick={() => addToFavorite(joke.joke)}
      >
       <FavoriteIcon />
      </IconButton>
     </CardActions>
    </>
   )}
  </Card>
 );
};
