const initialState = {
 lang: "en",
};

export const langReducer = (state = initialState, action) => {
 switch (action.type) {
  case "SET_GLOBAL_LANG":
   return { ...state, lang: action.payload };
  default:
   return state;
 }
};
