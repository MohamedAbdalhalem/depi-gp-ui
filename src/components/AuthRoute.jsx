import { Navigate } from "react-router";

export default function AuthRoute({ children }) {
  const isLoggedIn = localStorage.getItem("tkn");

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}