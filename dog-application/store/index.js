import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/index";
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
