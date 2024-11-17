import React from 'react';
// Just import the file
import SigninForm from "./SigninForm";
var Signin = function () {
    // And use it after the h1 tag
    return (React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-gray-100" },
        React.createElement("div", { className: "max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md" },
            React.createElement("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-8" }, "Sign in"),
            React.createElement(SigninForm, null))));
};
export default Signin;
