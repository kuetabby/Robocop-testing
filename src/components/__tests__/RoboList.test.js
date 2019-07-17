import React from "react";
import { render } from "@testing-library/react";
import RoboList from "../RoboList";
import { robots } from "../robots";

test("render without crashing", () => {
  const { getByText } = render(<RoboList robots={robots} />);
  expect(getByText(/Leanne Graham/i)).toBeInTheDocument();
});
