import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

export const Private_Routes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};