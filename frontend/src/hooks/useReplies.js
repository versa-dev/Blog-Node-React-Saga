import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchReplies,
  repliesSelector,
  createReply as _createReply,
} from "../redux/replies";

function useComments() {
  const dispatch = useDispatch();
  const replies = useSelector(repliesSelector);

  useEffect(() => {
    dispatch(fetchReplies());
  }, [dispatch]);

  const createComment = (commentId, content) =>
    dispatch(_createReply(commentId, content));
  
  
  }
  

  return { replies, createReply };
}

export default useReplies;
