import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";
import router from "./routes";
var App = function () {
    var currentTheme = useContext(ThemeContext);
    var theme = useContext(ThemeContext).theme;
    return (React.createElement("div", { className: "h-screen w-full mx-auto py-2 ".concat(theme === "dark" ? "dark" : "") },
        theme,
        React.createElement(RouterProvider, { router: router })));
};
export default App;
