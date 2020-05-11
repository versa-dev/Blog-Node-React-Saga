import Axios from "axios";

export async function getComments() {
  const res = await Axios.get("http://localhost:3001/comments");
  const comments = res.data;
  return comments;
}

export async function createComment(userId, content) {
  const res = await Axios.post("http://localhost:3001/comments", {
    user_id: userId,
    content: content,
  });
  const comment = res.data;
  return comment;
}
