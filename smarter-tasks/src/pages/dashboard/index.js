import React from 'react';
import { useNavigate } from 'react-router-dom';
var Dashboard = function () {
    var navigate = useNavigate();
    var userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData.name || !userData.email) {
        return React.createElement("p", null, "No user logged in.");
    }
    console.log(userData.id); // "1"
    console.log(userData.name); // "Avishek Jana"
    console.log(userData.email); // "avishek@example.com"
    var handleLogout = function () {
        // Clear localStorage and redirect to sign-in
        localStorage.removeItem('userData');
        navigate('/signin');
    };
    return (React.createElement("div", { className: "min-h-screen  items-center justify-center bg-gray-100" },
        React.createElement("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-8" }, "Dashboard"),
        React.createElement("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-8" }, userData.id),
        React.createElement("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-8" }, userData.name),
        React.createElement("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-8" }, userData.email),
        React.createElement("button", { type: "submit", onClick: handleLogout, className: "w-100 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4" }, "Sign out")));
};
export default Dashboard;
