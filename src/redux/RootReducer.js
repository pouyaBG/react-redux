import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./IceCream/icecreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

export default rootReducer;
