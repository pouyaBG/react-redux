import { BUY_CAKE } from "./cakeTypes";

const initalState = {
  numberOfCakes: 10,
};
const cakeReducer = (state = initalState, action) => {
  console.log("action", action.payload);
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - action.payload };
    default:
      return state;
  }
};

export default cakeReducer;
