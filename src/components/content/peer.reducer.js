import Peer from 'simple-peer';
import { UPDATE_PEER } from "./users.constants";

const initialState = new Peer ({
  initiator: false,
  trickle: false
});

function peerReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PEER:
      return action.peer
    default:
      return state;
  }
}

export default peerReducer;