import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import InitialPage from "./pages/InitialPage";
import EndPage from "./pages/EndPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <InitialPage /> },
      { path: "/home", element: <Home /> },
      { path: "/download", element: <EndPage /> },
    ],
  },
]);
