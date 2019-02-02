import { ADD_MESSAGE } from "./action";

const initialState = []

function messengerReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}

export default messengerReducer;