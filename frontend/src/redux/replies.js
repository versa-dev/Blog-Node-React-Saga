import { call, put, takeLatest } from "redux-saga/effects";

import * as RepliesService from "../services/replies";

import * as actionTypes from './actionTypes';

export function fetchReplies() {
  return {
    type: actionTypes.FETCH_REPLIES,
  };
}

export function fetchRepliesSuccess(replies) {
  return {
    type: actionTypes.FETCH_REPLIES_SUCCESS,
    payload: replies,
  };
}

export function fetchRepliesFailure(error) {
  return {
    type: actionTypes.FETCH_REPLIES_FAILURE,
    payload: error,
    error: true,
  };
}

export function createReply(userId, commentId, content) {
    
  return {
    type: actionTypes.CREATE_REPLY,
    payload: {
        userId,
        commentId,
        content,
    },
  };
}

const initialState = {
  isFetching: false,
  replies:[],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_REPLIES:
      return {
        ...state,
        isFetching: true,
      };
      
    case actionTypes.FETCH_REPLIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        replies: action.payload,
      };
      
    case actionTypes.FETCH_REPLIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    
    default:
      return state;
  }
}

function* fetchRepliesSagaWorker() {
  try {
    const replies = yield call(RepliesService.getReplies);
    yield put(fetchRepliesSuccess(replies));
  } catch (e) {
    yield put(fetchRepliesFailure(e));
  }
}



function* createReplySagaWorker(action) {
  const { userId, commentId, content } = action.payload;
  yield call(RepliesService.createReply, userId,commentId, content);
  yield call(fetchRepliesSagaWorker);
}


export function* repliesSagaWatcher() {
  yield takeLatest(actionTypes.FETCH_REPLIES, fetchRepliesSagaWorker); 
  yield takeLatest(actionTypes.CREATE_REPLY, createReplySagaWorker);
  
}

export function repliesSelector(state) {
  
  return state.replies.replies;
}
