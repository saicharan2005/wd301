// src/pages/NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
var NotFound = function () {
    var navigate = useNavigate();
    var handleBackToHome = function () {
        navigate("/home");
    };
    return (React.createElement("div", { style: { textAlign: "center", marginTop: "50px" } },
        React.createElement("h1", null, "404 - Page Not Found"),
        React.createElement("p", null, "The page you are looking for does not exist."),
        React.createElement("button", { id: "backToHomeButton", onClick: handleBackToHome, style: {
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            } }, "Go Back to Homepage")));
};
export default NotFound;
