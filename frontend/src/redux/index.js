import { combineReducers } from "redux";

import * as UsersStore from "./users";
import * as CommentsStore from "./comments";
import * as RepliiesStore from "./replies";

export const reducer = combineReducers({
  comments: CommentsStore.reducer,
  users: UsersStore.reducer,
  replies: RepliiesStore.reducer,
});

export const sagas = [
  CommentsStore.commentsSagaWatcher,
  UsersStore.usersSagaWatcher,
  RepliiesStore.repliesSagaWatcher,
];
