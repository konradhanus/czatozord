import { SELECT_USER, ADD_USER } from './users.constants';

function userSelectedReducer(state = null, action) {
  switch (action.type) {
    case SELECT_USER:
      return action.user;
    default:
      return state;
  }
}

export default userSelectedReducer;