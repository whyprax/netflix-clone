/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
