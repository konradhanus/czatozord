import { ADD_USER } from "./action";

const initialState = [
];

function usersReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
      return [...state, action.newUser];
    default:
      return state;
  }
}

export default usersReducer;