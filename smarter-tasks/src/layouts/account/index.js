import * as React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
var AccountLayout = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Appbar, null),
        React.createElement("main", null,
            React.createElement("div", { className: "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" },
                React.createElement(Outlet, null)))));
};
export default AccountLayout;
