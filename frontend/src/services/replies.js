import Axios from "axios";

export async function getReplies() {
  const res = await Axios.get("http://localhost:3001/replies");
  const replies = res.data;
  return replies;
}

export async function createReply(userId,commentId, content) {
  
  const res = await Axios.post("http://localhost:3001/replies", {
    user_id: userId,
    comment_id: commentId,
    content: content,
  });
  const reply = res.data;
  return reply;
}
