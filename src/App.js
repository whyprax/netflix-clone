import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROOT from "./pages/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<ROOT.Home />} />
        <Route exact path={ROUTES.SIGN_IN} element={<ROOT.Signin />} />
        <Route exact path={ROUTES.SIGN_UP} element={<ROOT.Signup />} />
        <Route exact path={ROUTES.BROWSE} element={<ROOT.Browse />} />
      </Routes>
    </BrowserRouter>
  );
}
