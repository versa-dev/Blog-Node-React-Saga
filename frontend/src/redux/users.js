import { call, put, takeLatest } from "redux-saga/effects";

import * as UsersService from "../services/users";
import * as actionTypes from './actionTypes'


export function fetchUsers() {
  return {
    type: actionTypes.FETCH_USERS,
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  };
}

export function fetchUsersFailure(error) {
  return {
    type: actionTypes.FETCH_USERS_FAILURE,
    payload: error,
    error: true,
  };
}

const initialState = {
  isFetching: false,
  users: [],
  selectedUserId:null
};

export function selectUser(userId){
  
  return{
    type:actionTypes.SELECT_USER,
    payload:userId
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case actionTypes.SELECT_USER:
      
      return {
        ...state,
        selectedUserId:action.userId
      }
    default:
      return state;
  }
}

function* fetchUsersSagaWorker() {
  try {
    const users = yield call(UsersService.getUsers);
    yield put(fetchUsersSuccess(users));
  } catch (e) {
    yield put(fetchUsersFailure(e));
  }
}
function* selectUserWorker(action){
  yield put({type:action.type,userId:action.value})
}
export function* usersSagaWatcher() {
  yield takeLatest(actionTypes.FETCH_USERS, fetchUsersSagaWorker);
}
export function* selectUserWatcher(){
  yield takeLatest(actionTypes.SELECT_USER,selectUserWorker)
}
export function usersSelector(state) {
  return state.users.users;
}
export function usersSelectedUserId(state){
  return state.selectedUserId;
}