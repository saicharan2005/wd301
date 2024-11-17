import React from "react";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute(_a) {
    var children = _a.children;
    var authenticated = !!localStorage.getItem("authToken");
    if (authenticated) {
        return React.createElement(React.Fragment, null, children);
    }
    else {
        return React.createElement(Navigate, { to: "/signin" });
    }
}
