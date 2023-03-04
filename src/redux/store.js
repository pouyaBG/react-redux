import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cakeReducer from "./Cake/cakeReducer";

const store = createStore(cakeReducer, applyMiddleware(thunk));

export default store;
