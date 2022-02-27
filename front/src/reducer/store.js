import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { robotReducer } from "./robots/robot-reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: robotReducer,

  enhancers: composeEnhancer,
});
