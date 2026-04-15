import { Navigate } from "react-router";

export default function UnAuthRoute({ children }) {
  const isLoggedIn = localStorage.getItem("tkn");

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}