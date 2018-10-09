import { ADD_MESSAGE } from './messenger.constants';

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}