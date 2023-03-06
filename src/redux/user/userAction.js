import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userType";



function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSuccess(error) {
  return {
    type: FETCH_USER_SUCCESS,
    payLoad: error,
  };
}
function fetchUserFailure(users) {
  return {
    type: FETCH_USER_FAILURE,
    payLoad: users,
  };
}


export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const userId = res.data.map((user) => user.id);
        dispatch(fetchUserSuccess(userId));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err));
      });
  };
};