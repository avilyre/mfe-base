import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./layouts/default-layout";

import HomePage from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import Soon from "./pages/Soon";

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
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/soon",
        element: <Soon />
      }
    ]
  }
]);