import { actionTypes } from "./action-types";

const initialState = {
  robots: [],
};

export function robotReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.loadRobots:
      return [{ ...state, robots: action.payload }];
    case actionTypes.addRobot:
      return { ...state, robots: [...state.robots, action.payload] };
    case actionTypes.removeRobot:
      return { ...state, robots: state.robots.filter((item) => item.id !== action.payload.id) };
    case actionTypes.updateRobot:
      return { ...state, robots: state.robots.map((item) => (item.id === action.payload.id ? action.payload : item)) };
    default:
      return state;
  }
}
