import axios from "axios";
import { translate } from "./translator";
export const fetchRandomJoke = (currLang) => async (dispatch) => {
 try {
  dispatch({ type: "FETCH_JOKE_LOADING" });
  const response = await axios.get(
   "https://official-joke-api.appspot.com/random_joke"
  );
  const r = await translate("es", response);
  console.log("r", r);
  dispatch({ type: "FETCH_JOKE_SUCCESS", payload: response.data });
 } catch (error) {
  dispatch({ type: "FETCH_JOKE_FAILURE", payload: error.message });
 }
};
