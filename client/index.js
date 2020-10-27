/**
 * This is the entry point for the application
 */

 import React from "react";
 import { render } from "react-dom";
 //only if using redux
//  import { Provider } from "react-redux";
 import App from "./App.jsx";
//  import store from "./store"

render(
  <App />,
  //location
  document.getElementById("contents")
);