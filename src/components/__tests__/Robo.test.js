import React from "react";
import { render } from "@testing-library/react";
import Robo from "../Robo";

test("render without crashing", () => {
  const { getByText } = render(
    <Robo name={"Ivan"} email={"ivan@gmail.com"} id={12} />
  );
  expect(getByText(/ivan@gmail.com/i)).toBeDefined();
});
