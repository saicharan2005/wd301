import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";
var router = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(Signup, null),
    },
    {
        path: "/signup",
        element: React.createElement(Signup, null),
    },
    {
        path: "/signin",
        element: React.createElement(Signin, null),
    },
    {
        path: "/notfound",
        element: React.createElement(NotFound, null),
    },
    {
        path: "/dashboard",
        element: (React.createElement(ProtectedRoute, null,
            React.createElement(Dashboard, null))),
    },
    {
        path: "*",
        element: React.createElement(NotFound, null),
    },
]);
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(RouterProvider, { router: router })));
}
export default App;
