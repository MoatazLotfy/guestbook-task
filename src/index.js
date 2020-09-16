import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Login from "./components/login";
import Signup from "./components/signup";
import Messages from "./components/messages";
import Gallery from "./components/gallery";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Gallery />
  </Router>,
  document.getElementById("root")
);
