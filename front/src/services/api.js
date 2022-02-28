import axios from "axios";

const ROBOTS_API = "http://localhost:8000/robots/";
const ROBOTS_USER = "http://localhost:8000/login/";

export function getAllRobots() {
  return axios.get(ROBOTS_API);
}
export function getRobot(id) {
  return axios.get(ROBOTS_API + id);
}
export function setRobot(robot) {
  return axios.post(ROBOTS_API, robot);
}
export function updateRobot(robot) {
  return axios.patch(ROBOTS_API + robot._id, robot);
}
export function removeRobot(id) {
  return axios.delete(ROBOTS_API + id);
}

export function getDetails(url) {
  return axios.get(url);
}
export function getToken(user) {
  return axios.post(ROBOTS_USER, user);
}
