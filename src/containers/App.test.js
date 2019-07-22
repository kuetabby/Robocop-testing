import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render, wait, fireEvent } from "@testing-library/react";
import thunkMiddleware from "redux-thunk";

import { searchRobots, requestRobots } from "../reducers";
import App from "./App";

const rootReducer = combineReducers({ searchRobots, requestRobots });

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
    )
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test("robots without crashing", async () => {
  const { getByText } = renderWithRedux(<App />, {
    initialState: {
      requestRobots: {
        isPending: false,
        robots: [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
          }
        ],
        error: ""
      },
      searchRobots: {
        searchField: ""
      }
    }
  });

  await wait(() => {
    expect(getByText(/leanne graham/i)).toBeDefined();
  });
});

test("search without crashing", async () => {
  const { getByTestId, getByText } = renderWithRedux(<App />, {
    initialState: {
      requestRobots: {
        isPending: false,
        robots: [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
          }
        ],
        error: ""
      },
      searchRobots: {
        searchField: ""
      }
    }
  });

  fireEvent.change(getByTestId("search"), { target: { value: "leanne" } });

  await wait(() => {
    expect(getByText(/leanne graham/i)).toBeDefined();
  });
});
