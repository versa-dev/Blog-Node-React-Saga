import { combineReducers } from "redux";

import * as UsersStore from "./users";
import * as CommentsStore from "./comments";

export const reducer = combineReducers({
  comments: CommentsStore.reducer,
  users: UsersStore.reducer,
});

export const sagas = [
  CommentsStore.commentsSagaWatcher,
  UsersStore.usersSagaWatcher,
];
