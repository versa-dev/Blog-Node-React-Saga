import Axios from "axios";

export async function getUsers() {
  const res = await Axios.get("http://localhost:3001/users");
  const users = res.data;
  return users;
}
