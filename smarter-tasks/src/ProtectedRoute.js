import React from "react";
import { Navigate, useLocation } from "react-router-dom";
export default function ProtectedRoute(_a) {
    var children = _a.children;
    var pathname = useLocation().pathname;
    var authenticated = !!localStorage.getItem("authToken");
    if (authenticated) {
        return React.createElement(React.Fragment, null, children);
    }
    return React.createElement(Navigate, { to: "/signin", replace: true, state: { referrer: pathname } });
}
