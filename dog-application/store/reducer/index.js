import { FETCH_DOGS, SET_LOADING, FETCH_BY_BREED, FETCH_IMAGES } from "../keys";
const initialState = {
  dogs: {},
  isLoading: true,
  breed: [],
  images: {},
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOGS:
      return { ...state, dogs: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_BY_BREED:
      return { ...state, breed: action.payload };
    case FETCH_IMAGES:
      return { ...state, images: action.payload };

    default:
      return state;
  }
}

export default reducer;
