import React from "react";
import { render } from "@testing-library/react";
import Scroll from "../Scroll";

test("showing children without crashing", () => {
  const sleepingChild = "This is for testing only";

  const { getByText, debug } = render(<Scroll>{sleepingChild}</Scroll>);
  expect(getByText(/this is for testing only/i)).toBeInTheDocument();
});
