import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userType";
const initialState = {
  loading: false,
  users: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { loading: true };
    case FETCH_USER_FAILURE:
      return { loading: false, error: action.payLoad, users: [] };
    case FETCH_USER_SUCCESS:
      return { loading: false, error: "", users: action.payLoad };
    default:
      return state; // add default case to return state
  }
};

export default userReducer;
