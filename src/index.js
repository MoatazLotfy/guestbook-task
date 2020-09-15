import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Login from "./components/login";
import Signup from "./components/signup";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
