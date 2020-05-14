import Axios from "axios";

export async function getUsers() {
  const res = await Axios.get("/users");
  const users = res.data;
  return users;
}
