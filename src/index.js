import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import "fontawesome";
import * as serviceWorker from "./serviceWorker";
import model from "./model";
import postsModel from "./postsModel";
import { StoreProvider, createStore } from "easy-peasy";

const root = {
  model,
  postsModel
};

//export default () => createStore(root);
const store = createStore(root);

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
