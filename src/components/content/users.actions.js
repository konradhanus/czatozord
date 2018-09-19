import { SELECT_USER, ADD_USER } from './users.constants';

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