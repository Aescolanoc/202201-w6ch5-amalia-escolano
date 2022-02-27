import { RobotsList } from "./robots-list";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Robots list component", () => {
  let preloadedState;
  beforeEach(() => {
    preloadedState = {
      robots: [
        {
          _id: 1,
          name: "robot 1",
          image: "foto",
        },
      ],
    };
  });
  test("should be rendered", async () => {
    render(
      <MemoryRouter>
        <RobotsList />
      </MemoryRouter>,
      { preloadedState }
    );
    expect(await screen.getByText(/Robot/i));
  });
});
