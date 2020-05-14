import Axios from "axios";

export async function getReplies() {
  const res = await Axios.get("/replies");
  const replies = res.data;
  return replies;
}

export async function createReply(userId,commentId, content) {
  
  const res = await Axios.post("/replies", {
    user_id: userId,
    comment_id: commentId,
    content: content,
  });
  const reply = res.data;
  return reply;
}
