import React from "react";
import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (!user) {
    return children;
  }

  if (user) {
    return <Navigate to={{ pathname: loggedInPath }} />;
  }

  return null;
}

export function ProtectedRoute({ user, children }) {
  if (user) {
    return children;
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return null;
}

// export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (!user) return children;

//         if (user) {
//           return (
//             <Navigate
//               to={{
//                 pathname: loggedInPath,
//               }}
//             />
//           );
//         }

//         return null;
//       }}
//     />
//   );
// }

// export function ProtectedRoute({ user, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (user) {
//           return children;
//         }

//         if (!user) {
//           return (
//             <Navigate
//               to={{
//                 pathname: "signin",
//                 state: { from: location },
//               }}
//             />
//           );
//         }

//         return null;
//       }}
//     />
//   );
// }
