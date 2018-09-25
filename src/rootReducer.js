import { combineReducers } from 'redux';
import usersReducer from './components/content/users.reducer';
import userSelectedReducer from './components/content/userSelected.reducer';

export default combineReducers({
  users: usersReducer,
  selectedUser: userSelectedReducer
});
