import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import App from "./App";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
