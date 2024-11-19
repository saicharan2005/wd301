import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import AccountLayout from "../layouts/account";
import ProtectedRoute from "../ProtectedRoute";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Projects from "../pages/projects";
import Members from "../pages/members";
var router = createBrowserRouter([
    { path: "/", element: React.createElement(Navigate, { to: "/account/projects", replace: true }) },
    {
        path: "/signin",
        element: React.createElement(Signin, null)
    },
    {
        path: "/signup",
        element: React.createElement(Signup, null)
    },
    // Protected Routes
    {
        path: "account",
        element: (React.createElement(ProtectedRoute, null,
            React.createElement(AccountLayout, null))),
        children: [
            { index: true, element: React.createElement(Navigate, { to: "/account/projects", replace: true }) },
            {
                path: "projects",
                element: (React.createElement(Projects, null))
            },
            {
                path: "members",
                element: (React.createElement(Members, null))
            },
        ],
    },
]);
export default router;
