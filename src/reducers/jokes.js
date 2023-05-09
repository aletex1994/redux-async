const initialState = {
 joke: null,
 error: null,
 isLoading: false,
};

export const jokesReducer = (state = initialState, action) => {
 switch (action.type) {
  case "FETCH_JOKE_LOADING":
   return { ...state, isLoading: true };
  case "FETCH_JOKE_SUCCESS":
   return { ...state, isLoading: false, joke: action.payload, error: null };
  case "FETCH_JOKE_FAILURE":
   return { ...state, isLoading: false, error: action.payload };
  default:
   return state;
 }
};
