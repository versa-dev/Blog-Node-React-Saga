import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./components/App";
import * as AppStore from "./redux";

// Setup Redux store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppStore.reducer, applyMiddleware(sagaMiddleware));
AppStore.sagas.forEach((saga) => sagaMiddleware.run(saga));

// Expose Redux store for debugging purposes
window.store = store;

// Render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
