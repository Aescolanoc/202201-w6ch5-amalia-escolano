import { render, screen, waitForElement } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../reducer/store";
import { RobotsList } from "./robots-list";

describe("robot-list Component", () => {
  test("should be rendered", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <RobotsList />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.findAllByAltText(/ROBOTS LIST/i));
    await waitForElement(() => expect(screen.getAllByRole("figure")));
  });
});
