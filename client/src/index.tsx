import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// @ts-ignore
const store = createStore(reducers, {}, applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
