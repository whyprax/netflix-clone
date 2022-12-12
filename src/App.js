import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListerner } from "./hooks";

export default function App() {
  const { user } = useAuthListerner;
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signin />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Home />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signup />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
