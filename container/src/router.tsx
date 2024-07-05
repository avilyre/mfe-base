import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./layouts/default-layout";

import HomePage from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />
      }
    ]
  }
]);