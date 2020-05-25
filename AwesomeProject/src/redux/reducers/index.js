import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import userReduces from "./userReduces";
import loadingReducer from "./loadingReducer";

//combind all reducers to one
export default combineReducers({
  counter:counterReducer,
  userInfo: userReduces,
  loading: loadingReducer
});