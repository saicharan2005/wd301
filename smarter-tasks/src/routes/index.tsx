import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import AccountLayout from "../layouts/account"
import ProtectedRoute from "../ProtectedRoute"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Projects from "../pages/projects"
import Members from "../pages/members"

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: (<Projects />)
      },
      {
        path: "members",
        element: (<Members />)
      },
    ],
  },
]);

export default router;