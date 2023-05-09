import React, { useEffect } from "react";
import { favJokes } from "../selectors";
import { useSelector } from "react-redux";

export const FavList = () => {
 const favouriteJokes = useSelector(favJokes);
 useEffect(() => {
  console.log(favouriteJokes);
 });

 return (
  <div>
   {favouriteJokes.favJokes != null &&
    favouriteJokes.favJokes.map((joke, index) => (
     <div
      key={index}
      style={{
       fontSize: 12,
       color: joke.joke.color,
       textAlign: "left",
      }}
     >
      <p>{joke.joke.joke.setup}</p>
      <p>{joke.joke.joke.punchline}</p>
     </div>
    ))}
  </div>
 );
};
