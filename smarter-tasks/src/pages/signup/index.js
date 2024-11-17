import React from 'react';
// Import the file
import SignupForm from "./SignupForm";
var Signup = function () {
    // And use it after the h2 tag
    return (React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-gray-100" },
        React.createElement("div", { className: "max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md" },
            React.createElement("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-8" }, "Sign up"),
            React.createElement(SignupForm, null))));
};
export default Signup;
