import { combineReducers } from 'redux';
import usersReducer from './components/content/users.reducer';
import userSelectedReducer from './components/content/userSelected.reducer';
import firebaseKeyReducer from './components/content/firebaseKey.reducer';
import peerReducer from './components/content/peer.reducer';
import messengerReducer from './components/content/messenger/messenger.reducer';

export default combineReducers({
  users: usersReducer,
  selectedUser: userSelectedReducer,
  myFirebaseKey: firebaseKeyReducer,
  peer: peerReducer,
  messages: messengerReducer
});
