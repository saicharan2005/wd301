import React, { createContext, useState } from "react";
var ThemeContext = createContext({
    theme: 'light',
    setTheme: function () { }
});
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState('light'), theme = _b[0], setTheme = _b[1];
    var valueToShare = {
        theme: theme,
        setTheme: setTheme
    };
    return (React.createElement(ThemeContext.Provider, { value: valueToShare }, children));
};
export { ThemeContext, ThemeProvider };
