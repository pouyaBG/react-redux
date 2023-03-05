import { BUY_ICECREAM } from "./icecreamTypes";

const initalState = {
  numberOfIcecreams: 20,
};
const iceCreamReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numberOfIcecreams: state.numberOfIcecreams - 1 };
    default:
      return state;
  }
};

export default iceCreamReducer;
