import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBox from "../SearchBox";

test("search without crashing", () => {
  const props = {
    values: "",
    searchChange: jest.fn()
  };

  const { getByTestId } = render(<SearchBox {...props} />);

  expect(getByTestId("search")).toBeDefined();
});
