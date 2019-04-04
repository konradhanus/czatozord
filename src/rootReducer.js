import { combineReducers } from 'redux';
import usersReducer from './containers/Users/reducer';
import userSelectedReducer from './containers/Users/userSelected.reducer';
import firebaseKeyReducer from './containers/Users/firebaseKey.reducer';
import peerReducer from './components/Content/peer.reducer';
import messengerReducer from './containers/Messenger/reducer';

export default combineReducers({
  users: usersReducer,
  selectedUser: userSelectedReducer,
  myFirebaseKey: firebaseKeyReducer,
  peer: peerReducer,
  messages: messengerReducer
});
