import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);