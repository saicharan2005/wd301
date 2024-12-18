import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";

import router from "./routes"

const App = () => {
  const currentTheme = useContext(ThemeContext)
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      {theme}
      <RouterProvider router={router} />
    </div>
  );
}
export default App;