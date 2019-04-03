export const SELECT_USER = 'SELECT_USER';
export const ADD_USER = 'ADD_USER';
export const SET_MYFIREBASEKEY = 'SET_MYFIREBASEKEY';
export const UPDATE_PEER = 'UPDATE_PEER';

export const selectUser = (user) => {
  return {
    type: SELECT_USER,
    user
  }
}

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    newUser
  }
}

export const setFirebaseKey = (key) => {
  return {
    type: SET_MYFIREBASEKEY,
    key
  }
}

export const updatePeer = (peer) => {
  return {
    type: UPDATE_PEER,
    peer
  }
}