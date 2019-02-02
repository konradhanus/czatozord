import { combineReducers } from 'redux';
import usersReducer from './src/components/Users/reducer';
import userSelectedReducer from './src/components/Users/userSelected.reducer';
import firebaseKeyReducer from './src/components/Content/firebaseKey.reducer';
import peerReducer from './src/components/Content/peer.reducer';
import messengerReducer from './src/components/Messenger/reducer';

export default combineReducers({
  users: usersReducer,
  selectedUser: userSelectedReducer,
  myFirebaseKey: firebaseKeyReducer,
  peer: peerReducer,
  messages: messengerReducer
});
