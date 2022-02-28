import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../reducer/store";
import { RobotDetails } from "./robot-details";

describe("robot-list Component", () => {
  test("should be rendered", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <RobotDetails />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.findAllByAltText(/Detalles de/i));
  });
});
