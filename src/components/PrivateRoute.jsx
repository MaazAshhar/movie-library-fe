import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth";

const PrivateRoute = () => {
  return <div>{isLoggedIn() ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
