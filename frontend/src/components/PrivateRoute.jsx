// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// function PrivateRoute({ children, adminOnly = false }) {
//   const { token, role } = useSelector((state) => state.auth);

//   if (!token) {
//     return <Navigate to="/" />;
//   }

//   if (adminOnly && role !== "admin") {
//     return <Navigate to="/dashboard" />;
//   }

//   return children;
// }

// export default PrivateRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, adminOnly = false }) {
  const { token, role } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/" />;
  }

  if (adminOnly && role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default PrivateRoute;