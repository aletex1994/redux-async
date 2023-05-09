import axios from "axios";

export const fetchRandomJoke = () => async (dispatch) => {
 try {
  dispatch({ type: "FETCH_JOKE_LOADING" });
  const response = await axios.get(
   "https://official-joke-api.appspot.com/random_joke"
  );
  dispatch({ type: "FETCH_JOKE_SUCCESS", payload: response.data });
 } catch (error) {
  dispatch({ type: "FETCH_JOKE_FAILURE", payload: error.message });
 }
};
