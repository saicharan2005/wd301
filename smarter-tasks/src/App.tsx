

// import './App.css'

// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";

// import HomePage from './pages/HomePage';
// import TaskListPage from './pages/TaskListPage';
// import TaskDetailsPage from "./pages/TaskDetailsPage";
// import Form from './Form'

// import Signin from "./pages/Signin";

// import ProtectedRoute from "./ProtectedRoute";

// import Layout from "./Layout";
// import Notfound from './pages/Notfound';

// import Header from './components/Header';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/signin" replace />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
      
//     ),
//     children: [
//       {
//         path: "home",
//         element: (<HomePage />)
//       },
//       {
//         path: "tasks",
//         element: (<TaskListPage />)
//       },{
//         path: "tasks/:id",
//         element: (<TaskDetailsPage />)
//       }
//     ]
//   }, 
//   {
//     path: "/notfound",
//     element: <Notfound />, // Assign the NotFound component to the route
//   },
//   {
//     path: "*", // Catch-all for invalid routes
//     element: <Navigate to="/notfound" replace />,
//   },
// ]);

// function App() {
//   return (
//     <> 
//     {/* <ReactPlayground/> */}
//     <Header/>
//     <Form />
//     <RouterProvider router={router} />
//     </>
   
//   );
  

// }

// export default App


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Notfound from "./pages/Notfound";
import Signup from './pages/signup';
import Signin from './pages/signin';
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./pages/dashboard";

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
    path: "/signin", // then we've added the signin route
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
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
    element: <Notfound />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App