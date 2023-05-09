const initialState = {
 favJokes: [],
};

export const favJokesReducer = (state = initialState, action) => {
 switch (action.type) {
  case "ADD_FAV_JOKE":
   return { ...state, favJokes: [...state.favJokes, action.payload] };
  case "REMOVE_FAV_JOKE":
   return {
    ...state,
    favJokes: state.favJokes.filter((joke) => joke.id !== action.payload),
   };
  default:
   return state;
 }
};
