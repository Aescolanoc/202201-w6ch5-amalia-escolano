import axios from "axios";

const ROBOTS_API = "http://localhost:8000/robots/";

export function getAll() {
  return axios.get(ROBOTS_API);
}
export function get(id) {
  return axios.get(ROBOTS_API + id);
}
export function set(robot) {
  return axios.post(ROBOTS_API, robot);
}
export function update(robot) {
  return axios.patch(ROBOTS_API + robot.id, robot);
}
export function remove(id) {
  return axios.delete(ROBOTS_API + id);
}
