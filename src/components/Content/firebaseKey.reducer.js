import { SET_MYFIREBASEKEY } from './../Users/action';

function firebaseKeyReducer(state = null, action) {
  switch (action.type) {
    case SET_MYFIREBASEKEY:
      return action.key;
    default:
      return state;
  }
}

export default firebaseKeyReducer;