import { combineReducers } from 'redux';
import  eventReducer from './event';
import  roomReducer from './room';
import  registrationReducer from './registration';
import  authReducer from './auth';
import  formReducer from './questionForms';
import  profileReducer from './userProfile';

const rootReducer = combineReducers({
  event : eventReducer,
  room : roomReducer,
  registration : registrationReducer,
  auth : authReducer,
  questionForm : formReducer,
  profile : profileReducer
});

export default rootReducer;


