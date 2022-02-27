import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { RobotList } from "./components/robots-list";

jest.mock("./components/robots-list");

describe("Test for App Router", () => {
  test("renders RobotList on default route", () => {
    RobotList.mockImplementation(() => <div>PageRobotListMock</div>);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("PageRobotListMock")).toBeInTheDocument();
  });
});
