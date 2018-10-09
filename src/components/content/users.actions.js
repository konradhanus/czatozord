import { SELECT_USER, ADD_USER, SET_MYFIREBASEKEY, UPDATE_PEER } from './users.constants';

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