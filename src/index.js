import React from "react";
import ReactDOM from "react-dom";
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';

import { firebaseConfig } from './config.js';

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"));