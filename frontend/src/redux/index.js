import { combineReducers } from "redux";

import * as UsersStore from "./users";
import * as CommentsStore from "./comments";
import * as RepliesStore from "./replies";

export const reducer = combineReducers({
  comments: CommentsStore.reducer,
  users: UsersStore.reducer,
  replies: RepliesStore.reducer,
});

export const sagas = [
  CommentsStore.commentsSagaWatcher,
  UsersStore.usersSagaWatcher,
  RepliesStore.repliesSagaWatcher,
];
