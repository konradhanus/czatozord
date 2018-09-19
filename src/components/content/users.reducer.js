import { ADD_USER } from "./users.constants";

const initialState = [
  {
    name: 'Konrad Hanus',
  },
  {
    name: 'Igor Róg'
  },
  {
    name: 'Łukasz Kobierski'
  },
  {
    name: 'Fabrizio Iacovone'
  }
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