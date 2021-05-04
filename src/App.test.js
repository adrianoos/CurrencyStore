import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import allReducers from './Reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from "react-dom/test-utils";

import App from "./App";
import Header from './Components/Header'
import Navigation from'./Components/Navigation'

const store = createStore(allReducers)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , div);
});

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Header component renders fetched date", async () => {
  const fakeData = {
    date: '12-02-2021',
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  await act(async () => {
    render(<Header data={fakeData} />, container);
  });

  expect(container.querySelector("h3").textContent).toBe('currencies exchange rates for: ' + fakeData.date);

  global.fetch.mockRestore();
});

let container2 = null;
beforeEach(() => {
  container2 = document.createElement("div");
  document.body.appendChild(container2);
});

afterEach(() => {
  unmountComponentAtNode(container2);
  container2.remove();
  container2 = null;
});


it("Navigation button rendering with proper value", async () => {
  const onChange = jest.fn();

  const fakeTable = {
    state: 'A',
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTable)
    })
  );

   await act(async() => {
    render(
    <Provider store={store}>
    <Navigation onChange={onChange} tableType={fakeTable.state} clearFavorites={onChange}/>
    </Provider>, container2
    )
    ;
  });

  const button = document.querySelector("[data-testid=toggle]");
  expect(button.innerHTML).toBe("Table: <strong>A</strong>");
});