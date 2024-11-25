import { Navigate, Outlet } from "react-router-dom";

/* eslint-disable react/prop-types */
function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/admin" />;
  }
  return children ? children : <Outlet />;
}

export default AdminRoute;
