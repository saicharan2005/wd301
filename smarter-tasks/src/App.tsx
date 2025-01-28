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

import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {theme}
      <ProjectsProvider>
        <MembersProvider>
          <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};
export default App;
