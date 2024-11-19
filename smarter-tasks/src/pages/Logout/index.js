import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
var Logout = function () {
    useEffect(function () {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
    }, []);
    return React.createElement(Navigate, { to: "/signin" });
};
export default Logout;
