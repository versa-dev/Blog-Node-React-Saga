import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchComments,
  commentsSelector,
  createComment as _createComment,
} from "../redux/comments";

function useComments() {
  const dispatch = useDispatch();
  const comments = useSelector(commentsSelector);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const createComment = (userId, content) =>
    dispatch(_createComment(userId, content));
  

  

  return { comments, createComment };
}

export default useComments;
