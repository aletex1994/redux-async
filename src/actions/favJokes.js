export const addJokeToFavorite = (joke) => ({
 type: "ADD_FAV_JOKE",
 payload: {
  joke,
 },
});
export const removeJokeFromFavorite = (id) => ({
 type: "REMOVE_FAV_JOKE",
 payload: {
  id,
 },
});
