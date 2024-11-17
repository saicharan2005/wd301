
import React from "react";

import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";



import NotFound from "./pages/NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";








const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  
  
  {
    path: "/signin",
    element: <Signin />,
  },
 
      
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);



function App() {
  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}


export default App;