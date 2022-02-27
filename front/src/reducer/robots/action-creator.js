import { actionTypes } from "./action-types";

export const loadRobot = (payload) => ({
  type: actionTypes.loadRobots,
  payload,
});

export const addRobot = (payload) => ({
  type: actionTypes.addRobot,
  payload,
});

export const removeRobot = (payload) => ({
  type: actionTypes.removeRobot,
  payload,
});

export const updateRobot = (payload) => ({
  type: actionTypes.updateRobot,
  payload,
});
